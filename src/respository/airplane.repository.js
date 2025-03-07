
const CrudRepository = require("./crud.repository.js");
const {Airplane}  = require("../models/index.js")  // The model is properly initialized inside models/index.js, not inside airplane.js.

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }

}

module.exports= AirplaneRepository;