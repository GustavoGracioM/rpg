import { 
  Model, 
  Table, 
  Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Attributes from './attributes.model';
import Class from './class.model';
import Inventory from './inventory.model';
import User from './user.model';
import Expertise from './expertise.model';
import Attacks from './attacks.model';
import HistoryRoll from './history.roll.model';

@Table({
  tableName: 'character',
  timestamps: false,
})
export default class Character extends Model {
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
    type: DataType.INTEGER,
    field: 'health_points',
    defaultValue: 0,
  })
    healthPoints?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'sanity',
    defaultValue: 0,
  })
    sanity?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'effort_points',
    defaultValue: 0,
  })
    effortPoints?: number;

  @ForeignKey(() => Attributes)
  @Column({
    type: DataType.INTEGER,
    field: 'attributes_id',
  })
    attributesId?: number;

  @BelongsTo(() => Attributes, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    attributes?: Attributes;

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

  @ForeignKey(() => Expertise)
  @Column({
    type: DataType.INTEGER,
    field: 'expertise_id',
  })
    expertiseId?: number;

  @BelongsTo(() => Expertise, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    expertise?: Expertise;

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

  @HasMany(() => Inventory, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    inventory?: Inventory;

  @HasMany(() => Attacks, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    attacks?: Attacks;

  @HasMany(() => HistoryRoll, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    historyRoll?: HistoryRoll;
}