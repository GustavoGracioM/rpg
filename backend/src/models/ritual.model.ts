import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';

@Table({
  tableName: 'ritual',
  timestamps: false,
})
export default class Ritual extends Model {
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
    type: DataType.ARRAY(DataType.STRING),
    field: 'type',
  })
    type?: string[];

  @Column({
    type: DataType.STRING(255),
    field: 'circle',
  })
    circle?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'execution',
  })
    execution?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'reach',
  })
    reach?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'target',
  })
    target?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'duration',
  })
    duration?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'resistance',
  })
    resistance?: string;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.INTEGER,
    field: 'character_id',
  })
    characterId?: number;

  @BelongsTo(() => Character, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    character?: Character;
}