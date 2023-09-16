import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import errorHandler from './middlewares/errorHandeler.middlewares';
import characterRoute from './routes/character.route';
import attributesRoute from './routes/attributes.route';
import classRoute from './routes/class.route';
import skillsRoute from './routes/skills.route';
import inventoryRoute from './routes/inventory.route';
import expertiseRoute from './routes/expertise.route';
import userRoute from './routes/user.route';
import attacksRoute from './routes/attacks.route';
import historyRollRoute from './routes/history.roll.route';
import boardRoute from './routes/board.route';
import boardCharacterRoute from './routes/board.character.route';
import friendsListRoute from './routes/friends.list.route';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/character', characterRoute);
app.use('/attributes', attributesRoute);
app.use('/class', classRoute);
app.use('/skills', skillsRoute);
app.use('/inventory', inventoryRoute);
app.use('/expertise', expertiseRoute);
app.use('/attacks', attacksRoute);
app.use('/history-roll', historyRollRoute);
app.use('/boards', boardRoute);
app.use('/board-character', boardCharacterRoute);
app.use('/friends-list', friendsListRoute);
app.use(userRoute);

app.use(errorHandler);

export default app;