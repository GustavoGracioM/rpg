import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';

@Table({
  tableName: 'attributes',
  timestamps: false,
})
export default class Attributes extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
    id?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'agilidade',
    defaultValue: 0,
  })
    agilidade?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'forca',
    defaultValue: 0,
  })
    forca?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'intelecto',
    defaultValue: 0,
  })
    intelecto?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'presenca',
    defaultValue: 0,
  })
    presenca?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'vigor',
    defaultValue: 0,
  })
    vigor?: number;

  @HasMany(() => Character)
    character?: Character;
}