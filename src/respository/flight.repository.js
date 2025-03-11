const CrudRepository= require("./crud.repository");
const {Flight, Airplane, Airport, City}= require("../models/index.js");
const {Sequelize}=require("sequelize");

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
}
module.exports= FlightRepository;