
class ApiError extends Error{
    constructor(
        message,
        statusCode, 
        error={}
    ){
        super();
        this.message= message;
        this.statusCode=statusCode;
        this.success=false;
        this.error=error;
    }
}

module.exports = ApiError;