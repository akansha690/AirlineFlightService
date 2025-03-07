const {airplaneService} = require("../services/index.js");
const {StatusCodes} = require("http-status-codes");
const { response } = require("express");
async function createAirplane(req, res){
    try {
        const airplane = await airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        })
        return res.status(StatusCodes.CREATED)
        .json({
            success: true,
            message:"Airplane has been created successfully",
            data:response,
            error:{}
        });
        
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            message:"something went wrong",
            data:{},
            error:error
        });
    }
}

module.exports={
    createAirplane
}