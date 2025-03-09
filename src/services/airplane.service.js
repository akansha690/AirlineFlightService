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

async function getAirplane(id){
    try {
        const response = await airplaneRepository.get(id);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new ApiError("The given id airplane not present", error.statusCode);
        }
        throw new ApiError("cannot fetch data", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAllAirplane(){
    try {
        const response = await airplaneRepository.getAll();
        return response;
    } catch (error) {
        // console.log(error);
        throw new ApiError("cannot fetch data of all Airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id){
    try {

        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new ApiError("Airplane not found", error.statusCode);
        }
        throw new ApiError("cannot destroy Airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data){
    try {
        const response = await airplaneRepository.update(id, data);
        return response;
    } catch (error) {
        // console.log(error);
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new ApiError(error.message, error.statusCode);
        }
        throw new ApiError("cannot update Airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirplane,
    getAirplane,
    getAllAirplane,
    destroyAirplane,
    updateAirplane
}