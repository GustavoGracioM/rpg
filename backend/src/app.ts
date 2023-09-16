import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandler from './middlewares/errorHandeler.middlewares';
const app = express();
app.use(express.json());
app.use(cors());
app.use(errorHandler);

export default app;