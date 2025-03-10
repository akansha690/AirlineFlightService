
const express = require("express");
const router=express.Router();

const {cityController} = require("../../controllers/index.js");
const { cityMiddlewares } = require("../../middlewares/index.js");

router.post('/', cityMiddlewares.validateCreateRequest, cityController.createCity);
router.delete('/:id', cityController.destroyCity );    
router.patch('/:id', cityController.updateCity ); 

module.exports=router;