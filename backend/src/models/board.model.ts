import { 
  Model, Table, Column, DataType, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';
import BoardCharacter from './board.character';
import HistoryRoll from './history.roll.model';
import User from './user.model';

@Table({
  tableName: 'board',
  timestamps: false,
})
export default class Board extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
    id?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'name',
  })
    name?: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
    userId?: number;

  @HasMany(() => HistoryRoll)
    historyRoll?: HistoryRoll;

  @BelongsToMany(() => Character, () => BoardCharacter)
    characters?: Character[];
}