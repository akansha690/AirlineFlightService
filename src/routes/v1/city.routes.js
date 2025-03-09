
const express = require("express");
const router=express.Router();

const {cityController} = require("../../controllers/index.js");

router.post('/', cityController.createCity)

module.exports=router;