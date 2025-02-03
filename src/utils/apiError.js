
class apiError extends Error{
    constructor(
        message,
        error,
        statusCode
    ){
        super(message);
        this.message= message;
        this.error= error;
        this.statusCode=statusCode;
    }
}

module.exports = apiError;