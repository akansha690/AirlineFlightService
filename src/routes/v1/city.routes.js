
const express = require("express");
const router=express.Router();

const {cityController} = require("../../controllers/index.js");
const { cityMiddlewares } = require("../../middlewares/index.js");

router.post('/', cityMiddlewares.validateCreateRequest, cityController.createCity)

module.exports=router;