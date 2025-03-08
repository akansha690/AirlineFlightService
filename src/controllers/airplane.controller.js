
const {airplaneService} = require("../services/index.js");
const {StatusCodes} = require("http-status-codes");
const {errorResponse} = require("../utils/index.js");


async function createAirplane(req, res){
    try {
        const airplane = await airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        // console.log(airplane)
        return res.status(StatusCodes.CREATED)
        .json({
            success: true,
            message:"Airplane has been created successfully",
            data:airplane,
            error:{}
        });  
    } 
    catch(error) {
        // console.log(error.message);
        errorResponse.message=error.message;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
}

module.exports={
    createAirplane
}