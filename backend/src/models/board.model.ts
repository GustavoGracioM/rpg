import { 
  Model, Table, Column, DataType, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import HistoryRoll from './history.roll.model';
import User from './user.model';
import BoardUser from './board.user';

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

  @HasMany(() => HistoryRoll, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    historyRoll?: HistoryRoll;

  @BelongsToMany(() => User, () => BoardUser)
    users?: User[];
}