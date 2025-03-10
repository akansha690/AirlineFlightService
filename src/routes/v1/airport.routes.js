const express = require('express');
const router=express.Router();

const {airportController}=require("../../controllers/index.js")
const {airportMiddlewares} = require("../../middlewares/index.js")
router.post('/', 
    airportMiddlewares.validateCreateRequest,
    airportController.createAirport )

router.get('/all', airportController.getAllAirports);    
router.get('/:id', airportController.getAirport );    
router.delete('/:id', airportController.destroyAirport );    
router.patch('/:id', airportController.updateAirport);    

module.exports = router;