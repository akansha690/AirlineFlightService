const express = require('express');
const {airplaneController}=require("../../controllers/index.js")
const {airplanecreateMiddlewares} = require("../../middlewares/index.js")

const router=express.Router();

router.post('/', 
    airplanecreateMiddlewares.validateCreateRequest,
    airplaneController.createAirplane )

module.exports = router;