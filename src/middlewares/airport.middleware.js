const { StatusCodes } = require("http-status-codes");
const { errorResponse, ApiError } = require("../utils");

function validateCreateRequest(req, res, next){
    if(!req.body.name){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : name not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.code){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : code not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.cityId){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : cityId not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports={
    validateCreateRequest
}