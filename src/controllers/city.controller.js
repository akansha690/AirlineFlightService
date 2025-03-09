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

module.exports={
    createCity
}



