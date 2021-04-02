class HttpException extends Error {
  status: number;
  message: string;
  constructor(status: number, message: string) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.status = status || 500;
    this.message = message || 'server problem';
  }
}

export default HttpException;
