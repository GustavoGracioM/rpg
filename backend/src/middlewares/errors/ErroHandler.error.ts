export default abstract class ErrorHandler extends Error {
  abstract statusCode: number;

  // eslint-disable-next-line
  constructor(message: string) {
    super(message);
  }
}