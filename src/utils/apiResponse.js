class apiResponse{
    constructor(
        message, statusCode=200, data=null, success=true
    ){
        this.message=message;
        this.statusCode=statusCode;
        this.success=success;
        this.data=data;
    }
}
module.exports = apiResponse;