class apiResponse{
    constructor(
        message, statusCode, data, success
    ){
        this.message=message;
        this.statusCode=statusCode;
        this.success=success;
        this.data=data;
    }
}
module.exports = apiResponse;