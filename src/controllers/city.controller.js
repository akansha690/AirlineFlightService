const { StatusCodes } = require("http-status-codes");
const {cityService} = require("../services/index.js");
const { successResponse, errorResponse } = require("../utils/index.js");


async function createCity(req, res){
    try {
        const data = req.body;
        const city = await cityService.createCity(data);
        successResponse.data = city;
        successResponse.message="Successfully created City";
        return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        errorResponse.error=error;
        // errorResponse.message=error.message;
        errorResponse.message="Something went Wrong";
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function destroyCity(req, res){
    try {
        const resp = await cityService.destroyCity(req.params.id);
        successResponse.data = resp;
        successResponse.message="City deleted successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message="Something went Wrong";
        return res.status(error.statusCode).json(errorResponse);
    }
} 
async function updateCity(req, res){
    try {
        const id = req.params.id;
        const data = req.body;
        const resp = await cityService.updateCity(id, data);
        successResponse.data = resp;
        successResponse.message="City updated successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message="Something went Wrong";
        return res.status(error.statusCode).json(errorResponse);
    }
}

module.exports={
    createCity,
    updateCity,
    destroyCity
}



