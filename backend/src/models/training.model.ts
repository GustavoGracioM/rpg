import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import ExpersiteCharacter from './expertise.character.model';

@Table({
  tableName: 'training',
  timestamps: false,
})
export default class Training extends Model {
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

  @Column({
    type: DataType.STRING(255),
    field: 'bonus',
  })
    bonus?: string;

  @HasMany(() => ExpersiteCharacter)
    expersiteCharacter?: ExpersiteCharacter;
}