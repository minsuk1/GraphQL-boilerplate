class HttpException extends Error {
    status: number;
    code: number;
    message: string;
    name: string;
    constructor(status: number, code: number, message: string, name: string) {
      super();
      this.status = status;
      this.code = code;
      this.message = message;
      this.name = name;
    }
  }

  export default HttpException;
