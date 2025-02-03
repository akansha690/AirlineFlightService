
const express = require('express')
const app = express()

const {serverConfig, logger} = require('./config/index.js')

app.listen(serverConfig.PORT, ()=>{
    console.log(`Listening on server : ${serverConfig.PORT}`);
    logger.info("successfully started the server");
})





