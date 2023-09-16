import { 
  Model, Table, Column, DataType, BelongsToMany, HasMany, ForeignKey } from 'sequelize-typescript';
import Character from './character.model';
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


}