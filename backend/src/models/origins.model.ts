import { Model, Table, Column, DataType, HasMany, ForeignKey } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';
import Expertise from './expertise.model';

@Table({
  tableName: 'origins',
  timestamps: false,
})
export default class Origins extends Model {
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

  @ForeignKey(() => Expertise)
  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
    field: 'expertises_ids',
  })
    expertisesIds?: number[];

  @HasMany(() => Character)
    character?: Character;
}