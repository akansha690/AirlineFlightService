const express = require('express');
const router=express.Router();

const airplaneRoutes = require("./airplane.routes.js");
const cityRoutes = require("./city.routes.js");
const airportRoutes = require("./airport.routes.js");
const flightRoutes = require("./flight.routes.js");

router.use('/airplanes', airplaneRoutes);
router.use('/airports', airportRoutes);
router.use('/city', cityRoutes);
router.use('/flights', flightRoutes);

module.exports = router;