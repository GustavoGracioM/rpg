import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Board from './board.model';
import User from './user.model';

@Table({
  tableName: 'board_user',
  timestamps: false,
})
export default class BoardUser extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
    id?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'status',
    defaultValue: 'pending',
  })
    status?: string;

  @ForeignKey(() => Board)
  @Column({
    type: DataType.INTEGER,
    field: 'board_id',
  })
    boardId?: number;

  @BelongsTo(() => Board, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    board?: Board;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
    userId?: number;

  @BelongsTo(() => User, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    user?: User;
}