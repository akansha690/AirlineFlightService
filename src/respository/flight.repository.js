const CrudRepository= require("./crud.repository");
const {Flight, Airplane, Airport, City}= require("../models/index.js");
const {Sequelize, NUMBER, Transaction}=require("sequelize");
const db = require("../models/index.js");
const {addRowLockOnFlights} = require("./queries.js")


class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }
    async getAllflight(filter, sort){
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include:[
                    { 
                        model : Airplane, //deafult it joins on id
                        as:"airplaneDetails"
                    },
                    {
                        model: Airport,
                        //without alias
                        // on:{
                        //     col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("Airport.code"))
                        // }
                        as:"departureAirport",
                        on:{
                            col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                        },
                        include:{
                            model: City
                        }
                    },
                    {
                        model:Airport,
                        as:"arrivalAirport",
                        on:{
                            col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),"=",Sequelize.col("arrivalAirport.code"))
                        },
                        include:{
                            model: City
                        }
                    }
            
                ]
        });
        return response;
    }

    async updateRemainingSeats(flightId, seats, dec=true){
        // Flight.decrement() does not return the updated instance by default.
        // it retures an array ['undefined', affectedRows];
        const transaction = await db.sequelize.transaction();
        try {
            await db.sequelize.query(addRowLockOnFlights(flightId));
            const flight = await Flight.findByPk(flightId);
            if(+dec){
                await flight.decrement('totalSeats', {
                    by:seats,
                    where:{id:flightId},
                },
                {
                    transaction:transaction
                });
                
            }
            else{
                await flight.increment('totalSeats', {
                    by:seats,
                    where:{id:flightId},
                },
                {
                    transaction : transaction
                });
            }
            await flight.save({transaction});
            await transaction.commit();
            return flight;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}
module.exports= FlightRepository;