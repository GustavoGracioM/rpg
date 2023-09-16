import { ErrorRequestHandler } from 'express';
import ErrorHandler from './errors/ErroHandler.error';

const errorHandler: ErrorRequestHandler = ( 
  err: ErrorHandler, 
  _req,
  res,
  _next,
) => {
  const { message } = err;
  let { statusCode } = err;
  if (!statusCode) statusCode = 500;
  return res.status(statusCode).json({ message });
};

export default errorHandler;