import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';

@Table({
  tableName: 'class',
  timestamps: false,
})
export default class Class extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
    id?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'type',
  })
    type?: string;

  @HasMany(() => Character)
    character?: Character;
}