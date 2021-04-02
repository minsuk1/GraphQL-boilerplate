class HttpException extends Error {
    status: number;
    message: string;
    
    constructor(
        status = 500,
        message = 'Internal Server Error',

    ) {
        super();
        Error.captureStackTrace(this, this.constructor);

        this.status = status;
        this.message = message;
    }
}

export default HttpException;
