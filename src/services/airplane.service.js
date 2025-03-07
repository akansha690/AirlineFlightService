const {AirplaneRepository} = require("../respository/index.js");

async function createAirplane(data){
    try {
        const airplane = await AirplaneRepository.create(data);
        return airplane;
    } catch (error) {
        throw error;
    }
}

module.exports={
    createAirplane
}