class HttpException extends Error {
    status: number;
    code: number;
    message: string;
    name: string;
    constructor(status: number, code: number, message: string, name: string) {
      super(message);
      this.status = status;
      this.message = message;
    }
  }

  export default HttpException;
