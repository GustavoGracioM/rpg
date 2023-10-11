import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandler from './middlewares/errorHandeler.middlewares';
import { attacksRoute, attributesRoute, boardRoute, boardUserRoute, 
  characterRoute, classRoute, expertiseRoute, friendsListRoute, 
  historyRollRoute, inventoryRoute, userRoute, ritualRoute,
  originsRoute, trailRoute, trainingRoute, expertiseCharacterRoute } from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/character', characterRoute);
app.use('/attributes', attributesRoute);
app.use('/class', classRoute);
app.use('/inventory', inventoryRoute);
app.use('/expertise', expertiseRoute);
app.use('/attacks', attacksRoute);
app.use('/history-roll', historyRollRoute);
app.use('/boards', boardRoute);
app.use('/board-user', boardUserRoute);
app.use('/friends-list', friendsListRoute);
app.use('/ritual', ritualRoute);
app.use('/origin', originsRoute);
app.use('/trail', trailRoute);
app.use('/training', trainingRoute);
app.use('/expertise-character', expertiseCharacterRoute);
app.use(userRoute);

app.use(errorHandler);

export default app;