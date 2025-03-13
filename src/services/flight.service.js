
const { StatusCodes } = require("http-status-codes");
const {FlightRepository} = require("../respository/index.js");
const { ApiError } = require("../utils/index.js");
const {helperDateTime} = require("../utils/index.js");
const {Op}=require("sequelize");

const flightRepository = new FlightRepository();

async function createflight(data){
    try {
        // console.log(data);
        helperDateTime.compare(data.departureTime, data.arrivalTime);
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let message=[];
            error.errors.forEach((err)=>{
                message.push(err.message);
            })
            throw new ApiError(message, StatusCodes.BAD_REQUEST);
        } 
        throw new ApiError("Cannot create a flight object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getflight(id){
    try {
        const response = await flightRepository.get(id);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new ApiError("The given id flight not present", error.statusCode);
        }
        throw new ApiError("cannot fetch data", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAllflight(){
    try {
        const response = await flightRepository.getAll();
        return response;
    } catch (error) {
        // console.log(error);
        throw new ApiError("cannot fetch data of all flights", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyflight(id){
    try {

        const response = await flightRepository.destroy(id);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new ApiError("flight not found", error.statusCode);
        }
        throw new ApiError("cannot destroy flight", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateflight(id, data){
    try {
        const response = await flightRepository.update(id, data);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new ApiError(error.message, error.statusCode);
        }
        throw new ApiError("cannot update flight", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllflights(query){
    try {
        let customQuery={};
        let sortQuery={};
        if(query.trips){
            [departureAirportId, arrivalAirportId] = query.trips.split("-");
            customQuery.departureAirportId=departureAirportId;
            customQuery.arrivalAirportId=arrivalAirportId;
        }
        if(query.price){
            [minPrice, maxPrice]=query.price.split("-");
            customQuery.price={
                [Op.between] : [minPrice, ((maxPrice==undefined)? 25000 : maxPrice )]
            }
        }
        if(query.travellers){
            customQuery.totalSeats = {
                [Op.gte] : query.travellers
            }
        }

        let endingTripDate=" 23:59:00";
        if(query.tripDate){
            customQuery.departureTime = {
                [Op.between] : [query.tripDate , query.tripDate+endingTripDate]
            }
        }
        if(query.sort){
            const params = query.sort.split(",");
            sortQuery = params.forEach((param)=>{
                param.split("_");
            }) 
        }
        const flight = await flightRepository.getAllflight(customQuery, sortQuery); 
        return flight;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new ApiError(error.message, error.statusCode);
        }
        throw new ApiError("Cannot get all the flights", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateSeats(id, data){
    try {
        const response = await flightRepository.updateRemainingSeats(id, data.seats, data.dec);
        return response;
        
    } catch (error) {
        // console.log(error);
        throw new ApiError("Cannot update data of the flight", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createflight,
    getflight,
    getAllflight,
    destroyflight,
    updateflight,
    getAllflights,
    updateSeats
}