const { StatusCodes } = require("http-status-codes");
const { errorResponse, ApiError } = require("../utils");

function validateCreateRequest(req, res, next){
    if(!req.body.name){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : city name not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}