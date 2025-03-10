
const { StatusCodes } = require("http-status-codes");
const {AirportRepository} = require("../respository/index.js");
const { ApiError } = require("../utils/index.js");
const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let message=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            })
            throw new ApiError(message, StatusCodes.BAD_REQUEST);
        } 
        throw new ApiError("Cannot create an airport object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirport(id){
    try {
        const response = await airportRepository.get(id);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new ApiError("The given id airport not present", error.statusCode);
        }
        throw new ApiError("cannot fetch data", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAllAirport(){
    try {
        const response = await airportRepository.getAll();
        return response;
    } catch (error) {
        // console.log(error);
        throw new ApiError("cannot fetch data of all Airports", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id){
    try {

        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new ApiError("Airport not found", error.statusCode);
        }
        throw new ApiError("cannot destroy Airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data){
    try {
        const response = await airportRepository.update(id, data);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new ApiError(error.message, error.statusCode);
        }
        throw new ApiError("cannot update Airport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirport,
    getAirport,
    getAllAirport,
    destroyAirport,
    updateAirport
}