const express = require('express');
const router=express.Router();

const airplaneRoutes = require("./airplane.routes.js");
const cityRoutes = require("./city.routes.js");

router.use('/airplanes', airplaneRoutes);
router.use('/city', cityRoutes);

module.exports = router;