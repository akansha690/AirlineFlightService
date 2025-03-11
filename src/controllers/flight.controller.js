const { StatusCodes } = require("http-status-codes");
const {flightService}=require("../services/index.js");
const { successResponse, errorResponse } = require("../utils/index.js");

async function createflight(req, res){
    try {
        const data = req.body;
        const flight= await flightService.createflight(data);
        successResponse.data= flight;
        successResponse.message="flight has been created successfully";
        return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        errorResponse.message="something went wrong";
        errorResponse.error=error;
        return res.status(error.statusCode).json(errorResponse);
    }
} 


async function getflight(req, res){
    try {
        const data =  req.params.id;
        const resp = await flightService.getflight(data);
        // console.log(resp);
        successResponse.data = resp;
        successResponse.message="flight fetched successfully";
        return res.status(StatusCodes.ACCEPTED).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message=error.message;
        return res.status(error.statusCode).json(errorResponse);
    }
} 
async function getAllflights(req, res){
    try {
        const resp = await flightService.getAllflight();
        successResponse.data = resp;
        successResponse.message="fetched all flights successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message="Something went wrong";
        return res.status(error.statusCode).json(errorResponse);
    }
} 

async function destroyflight(req, res){
    try {
        const resp = await flightService.destroyflight(req.params.id);
        successResponse.data = resp;
        successResponse.message="flight deleted successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message=error.message;
        return res.status(error.statusCode).json(errorResponse);
    }
} 
async function updateflight(req, res){
    try {
        const id = req.params.id;
        const data = req.body;
        const resp = await flightService.updateflight(id, data);
        successResponse.data = resp;
        successResponse.message="flight updated successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        // console.log(error);
        errorResponse.error=error;
        errorResponse.message="flight not updated";
        return res.status(error.statusCode).json(errorResponse);
    }
} 
async function getAllflightsQuery(req, res){
    try {       
        const resp = await flightService.getAllflights(req.query);
        successResponse.data = resp;
        if(resp.length === 0){
            successResponse.message="No such flights are there";
        }
        else successResponse.message="flight fetched successfully";
        return res.status(StatusCodes.OK).json(successResponse);
        
    } catch (error) {
        errorResponse.error=error;
        errorResponse.message="flights not fetched";
        return res.status(error.statusCode).json(errorResponse);
    }
} 



module.exports={
    createflight,
    getflight,
    getAllflights,
    destroyflight,
    updateflight,
    getAllflightsQuery
}
