import { Sequelize } from 'sequelize-typescript';
import { config, dialect } from './config/db.config';
import Character from '../models/character.model';
import Attributes from '../models/attributes.model';
import Class from '../models/class.model';
import Expertise from '../models/expertise.model';
import Inventory from '../models/inventory.model';
import User from '../models/user.model';
import Attacks from '../models/attacks.model';
import HistoryRoll from '../models/history.roll.model';
import Board from '../models/board.model';
import BoardCharacter from '../models/board.user';
import FriendsList from '../models/friends.list.model';
import Ritual from '../models/ritual.model';
import Origins from '../models/origins.model';
import Trail from '../models/trail.model';
import ExpersiteCharacter from '../models/expertise.character.model';
import Training from '../models/training.model';
import Skill from '../models/skill.model';

const configDB: object = {
  database: config.DB,
  username: config.USER,
  password: config.PASSWORD,
  host: config.HOST,
  port: config.PORT,
  dialect,
  models: [Character, 
    Attributes, Class, Expertise, Inventory, User, Attacks, HistoryRoll,
    Board, BoardCharacter, FriendsList, Ritual, Origins, Trail, ExpersiteCharacter,
    Training, Skill, 
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
