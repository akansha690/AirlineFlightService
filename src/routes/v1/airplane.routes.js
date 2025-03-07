const express = require('express');
const {airplaneController}=require("../../controllers/index.js")
const router=express.Router();

router.post('/', airplaneController.createAirplane )

module.exports = router;