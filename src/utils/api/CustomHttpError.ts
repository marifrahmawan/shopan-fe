export class CustomHttpError extends Error {
  name: "HTTP_ERROR";
  message: string;
  statusCode: number | undefined;

  constructor({
    name,
    message,
    statusCode,
  }: {
    name: "HTTP_ERROR";
    message: string;
    statusCode: number | undefined;
  }) {
    super();
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
  }
}
