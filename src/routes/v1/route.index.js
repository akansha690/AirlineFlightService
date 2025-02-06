const express = require('express')
const router = express.Router()

const apiResponse = require('../../utils/apiResponse.js');
const { StatusCodes } = require('http-status-codes');

router.get('/home' , (req, res)=>{
    return res.json(new apiResponse("success", StatusCodes.ACCEPTED));
});
 
module.exports = router;