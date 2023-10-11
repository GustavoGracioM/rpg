import { Model, Table, Column, DataType, HasMany, ForeignKey, 
  BelongsTo } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';
import Class from './class.model';

@Table({
  tableName: 'trail',
  timestamps: false,
})
export default class Trail extends Model {
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

  @ForeignKey(() => Class)
  @Column({
    type: DataType.INTEGER,
    field: 'class_id',
  })
    classId?: number;

  @BelongsTo(() => Class, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    class?: Class;

  @HasMany(() => Character)
    character?: Character;
}