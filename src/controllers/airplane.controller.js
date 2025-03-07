
const {airplaneService} = require("../services/index.js");
const {StatusCodes} = require("http-status-codes");

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
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            message:"something went wrong",
            data:{},
            error: error.message
        });
    }
}

module.exports={
    createAirplane
}