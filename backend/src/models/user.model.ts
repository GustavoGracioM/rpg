import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';
import Board from './board.model';
import FriendsList from './friends.list.model';

@Table({
  tableName: 'user',
  timestamps: false,
})
export default class User extends Model {
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

  @Column({
    type: DataType.STRING(255),
    field: 'email',
  })
    email?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'password',
  })
    password?: string;

  @HasMany(() => Character)
    character?: Character;

  @HasMany(() => Board)
    board?: Board;

  @HasMany(() => FriendsList)
    friendList?: FriendsList;
}