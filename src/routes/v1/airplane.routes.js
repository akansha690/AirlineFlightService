const express = require('express');
const {airplaneController}=require("../../controllers/index.js")
const {airplanecreateMiddlewares} = require("../../middlewares/index.js")

const router=express.Router();

router.post('/', 
    airplanecreateMiddlewares.validateCreateRequest,
    airplaneController.createAirplane )

router.get('/:id', airplaneController.getAirplane );    
router.get('/all', airplaneController.getAllAirplanes );    
router.delete('/:id', airplaneController.destroyAirplane );    
router.patch('/:id', airplaneController.updateAirplane );    

module.exports = router;