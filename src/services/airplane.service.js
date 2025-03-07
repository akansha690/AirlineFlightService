const {AirplaneRepository} = require("../respository/index.js");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        // console.log(data)
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports={
    createAirplane
}