const { StatusCodes } = require("http-status-codes");
const {AirplaneRepository} = require("../respository/index.js");
const { ApiError } = require("../utils/index.js");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        // console.log(data)
        const airplane = await airplaneRepository.create(data);
        return airplane;  // 🔹 Returns created airplane to Controller
    } catch (error) {
            // console.log(error);
            if(error.name == 'SequelizeValidationError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            })
            // console.log(explanation);
            throw new ApiError(explanation, StatusCodes.BAD_REQUEST);
        } 
        throw new ApiError("cannot create airplane object", StatusCodes.INTERNAL_SERVER_ERROR);     //Error propagates back to controller
    }
}

module.exports={
    createAirplane
}