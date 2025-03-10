
const { StatusCodes } = require("http-status-codes");
const {FlightRepository} = require("../respository/index.js");
const { ApiError } = require("../utils/index.js");
const {helperDateTime} = require("../utils/index.js");

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

module.exports={
    createflight,
    getflight,
    getAllflight,
    destroyflight,
    updateflight
}