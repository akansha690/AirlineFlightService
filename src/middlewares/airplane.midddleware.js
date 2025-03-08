const { StatusCodes } = require("http-status-codes");
const { errorResponse, ApiError } = require("../utils");

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        errorResponse.message="something went wrong";
        errorResponse.error = new ApiError("Invalid incoming request : modelNumber not found", StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    // if(!req.body.capacity){
    //     return res.status(StatusCodes.BAD_REQUEST).json({
    //         success: false,
    //         message:"something went wrong",
    //         data:{},
    //         error: "Invalid incoming request : capacity not found"
    //     })
    // }
    next();
}

module.exports={
    validateCreateRequest
}