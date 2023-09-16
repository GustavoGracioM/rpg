import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import User from './user.model';

@Table({
  tableName: 'friends_list',
  timestamps: false,
})
export default class FriendsList extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
    id?: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
  })
    userId?: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'friend_id',
  })
    friendId?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'status',
  })
    status?: string;

  @BelongsTo(() => User, 'friendId')
    friend?: User;

  @BelongsTo(() => User, 'userId')
    user?: User;
}