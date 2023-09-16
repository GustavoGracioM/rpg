import { Sequelize } from 'sequelize-typescript';
import { config, dialect } from '../config/db.config';
import Character from '../models/character.model';
import Attributes from '../models/attributes.model';
import Class from '../models/class.model';
import Skills from '../models/skills.model';
import Inventory from '../models/inventory.model';
import User from '../models/user.model';
import Expertise from '../models/expertise.model';
const configDB: object = {
  database: config.DB,
  username: config.USER,
  password: config.PASSWORD,
  host: config.HOST,
  port: config.PORT,
  dialect,
  models: [Character, 
    Attributes, Class, Skills, Inventory, User, Expertise, Attacks, HistoryRoll,
  ],
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
  logging: false,
};

class Database {
  public sequelize: Sequelize | undefined;

  constructor() {
    this.connectToDatabase();
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize(configDB);

    await this.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch((err) => {
        console.error('Unable to connect to the Database:', err);
      });
  }
}

export default Database;
