
const {airplaneService} = require("../services/index.js");
const {StatusCodes} = require("http-status-codes");
const {errorResponse, successResponse} = require("../utils/index.js");


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
        return res.status(error.statusCode).json(errorResponse);
    }
}

async function getAirplane(req, res){
    try {
        const data =  req.params.id;
        const resp = await airplaneService.getAirplane(data);
        // console.log(resp);
        successResponse.data = resp;
        successResponse.message="Got data successfully";
        return res.status(StatusCodes.ACCEPTED).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message=error.message;
        return res.status(error.statusCode).json(errorResponse);
    }
} 
async function getAllAirplanes(req, res){
    try {
        const resp = await airplaneService.getAllAirplane();
        successResponse.data = resp;
        successResponse.message="fetched all data successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message="Someth";
        return res.status(error.statusCode).json(errorResponse);
    }
} 

async function destroyAirplane(req, res){
    try {
        const resp = await airplaneService.destroyAirplane(req.params.id);
        successResponse.data = resp;
        successResponse.message="Airplane deleted successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message=error.message;
        return res.status(error.statusCode).json(errorResponse);
    }
} 
async function updateAirplane(req, res){
    try {
        const id = req.params.id;
        const data = req.body;
        const resp = await airplaneService.updateAirplane(id, data);
        successResponse.data = resp;
        successResponse.message="Airplane updated successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message="Airplane not updated";
        return res.status(error.statusCode).json(errorResponse);
    }
} 


module.exports={
    createAirplane,
    getAirplane,
    getAllAirplanes,
    destroyAirplane,
    updateAirplane
}