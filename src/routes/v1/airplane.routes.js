const express = require('express');
const router=express.Router();

const {airplaneController}=require("../../controllers/index.js")
const {airplaneMiddlewares} = require("../../middlewares/index.js")
router.post('/', 
    airplaneMiddlewares.validateCreateRequest,
    airplaneController.createAirplane )

router.get('/all', airplaneController.getAllAirplanes );    
router.get('/:id', airplaneController.getAirplane );    
router.delete('/:id', airplaneController.destroyAirplane );    
router.patch('/:id', airplaneController.updateAirplane );    

module.exports = router;