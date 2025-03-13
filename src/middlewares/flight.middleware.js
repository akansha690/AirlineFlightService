const { StatusCodes } = require("http-status-codes");
const { errorResponse, ApiError } = require("../utils");

function validateCreateRequest(req, res, next){
    if(!req.body.flightNumber){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : flightNumber not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.airplaneId){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : airplaneId not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.departureAirportId){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : departureAirportId not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.arrivalAirportId){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : arrivalAirportId not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.arrivalTime){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : arrivalTime not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.departureTime){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : departureTime not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    // if(req.body.arrivalTime <= req.body.departureTime){
    //     errorResponse.message="something went wrong";
    //     errorResponse.error = new ApiError("Invalid incoming request : arrivalTime cannot be lesser than departureTime", StatusCodes.BAD_REQUEST);
    //     return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    // }
    if(!req.body.price){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : price not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.totalSeats){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : totalSeats not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

function validateSeatUpdate(req, res, next){

    if(!req.body.seats){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : seats not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest,
    validateSeatUpdate
}