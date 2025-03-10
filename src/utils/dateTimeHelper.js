const { StatusCodes } = require("http-status-codes");
const { ApiError } = require("./index.js");

function compare(stringTime1, stringTime2){
    
        let d1 = new Date(stringTime1); //departureTime
        let d2 = new Date(stringTime2); //arrivalTime
        if(d1.getTime() >= d2.getTime()){
            throw new ApiError("set departureTime and arrivalTime properly", StatusCodes.BAD_REQUEST);
        }
        return true;
}

module.exports={
    compare
}