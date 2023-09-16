import app from './app';
import Database from './db';

const PORT = 4000;
const db = new Database();
db.sequelize?.sync();

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;