const express = require('express');
const router=express.Router();

const {airplaneController}=require("../../controllers/index.js")
const {airplanecreateMiddlewares} = require("../../middlewares/index.js")
router.post('/', 
    airplanecreateMiddlewares.validateCreateRequest,
    airplaneController.createAirplane )

router.get('/:id', airplaneController.getAirplane );    
router.get('/all', airplaneController.getAllAirplanes );    
router.delete('/:id', airplaneController.destroyAirplane );    
router.patch('/:id', airplaneController.updateAirplane );    

module.exports = router;