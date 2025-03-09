
class ApiError extends Error{
    constructor(
        message,
        statusCode
    ){
        super();
        this.message= message;
        this.statusCode=statusCode;
        this.success=false;
    }
}

module.exports = ApiError;