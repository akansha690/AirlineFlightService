const { StatusCodes } = require("http-status-codes");
const {airportService}=require("../services/index.js");
const { successResponse, errorResponse } = require("../utils/index.js");

async function createAirport(req, res){
    try {
        const data = req.body;
        const airport= await airportService.createAirport(data);
        successResponse.data= airport;
        successResponse.message="Airport has been created successfully";
        return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        errorResponse.message=error.message;
        return res.status(error.statusCode).json(errorResponse);
    }
} 


async function getAirport(req, res){
    try {
        const data =  req.params.id;
        const resp = await airportService.getAirport(data);
        // console.log(resp);
        successResponse.data = resp;
        successResponse.message="Airport fetched successfully";
        return res.status(StatusCodes.ACCEPTED).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message=error.message;
        return res.status(error.statusCode).json(errorResponse);
    }
} 
async function getAllAirports(req, res){
    try {
        const resp = await airportService.getAllAirport();
        successResponse.data = resp;
        successResponse.message="fetched all airports successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message="Something went wrong";
        return res.status(error.statusCode).json(errorResponse);
    }
} 

async function destroyAirport(req, res){
    try {
        const resp = await airportService.destroyAirport(req.params.id);
        successResponse.data = resp;
        successResponse.message="Airport deleted successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message=error.message;
        return res.status(error.statusCode).json(errorResponse);
    }
} 
async function updateAirport(req, res){
    try {
        const id = req.params.id;
        const data = req.body;
        const resp = await airportService.updateAirport(id, data);
        successResponse.data = resp;
        successResponse.message="Airport updated successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message="Airport not updated";
        return res.status(error.statusCode).json(errorResponse);
    }
} 


module.exports={
    createAirport,
    getAirport,
    getAllAirports,
    destroyAirport,
    updateAirport
}
