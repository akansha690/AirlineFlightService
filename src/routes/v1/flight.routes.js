const express = require('express');
const router=express.Router();

const {flightController}=require("../../controllers/index.js")
const {flightMiddlewares} = require("../../middlewares/index.js")
router.post('/', 
    flightMiddlewares.validateCreateRequest,
    flightController.createflight )

router.get('/all', flightController.getAllflights);    
router.get('/:id', flightController.getflight );    
router.delete('/:id', flightController.destroyflight );    
router.patch('/:id', flightController.updateflight);    

module.exports = router;