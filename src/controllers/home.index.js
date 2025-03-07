const { StatusCodes } = require("http-status-codes")

function home(req, res){
    res.status(StatusCodes.OK).json({
        msg:"ok"
    })
}

module.exports={
    home
}