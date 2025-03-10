
const { StatusCodes } = require("http-status-codes");
const {CityRepository} = require("../respository/index.js");
const { ApiError } = require("../utils");

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        const resp = await cityRepository.create(data);
        return resp;
    } catch (error) {
        // console.log(error);
        if(error.name == 'SequelizeValidationError' || 'SequelizeUniqueConstraintError'){
            let message=[];
            error.errors.map((err)=>{
                message.push(err.message);
            })
            throw new ApiError(message, StatusCodes.BAD_REQUEST);
        }
        throw new ApiError("Cannot create a new City", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function destroyCity(id){
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new ApiError("City not found", error.statusCode);
        }
        throw new ApiError("cannot destroy City", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id, data){
    try {
        const response = await cityRepository.update(id, data);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new ApiError(error.message, error.statusCode);
        }
        throw new ApiError("cannot update City", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createCity,
    destroyCity,
    updateCity
}