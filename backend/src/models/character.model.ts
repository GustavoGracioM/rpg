import { 
  Model, 
  Table, 
  Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Attributes from './attributes.model';
import Class from './class.model';
import Inventory from './inventory.model';
import User from './user.model';
import Attacks from './attacks.model';
import HistoryRoll from './history.roll.model';
import Origins from './origins.model';
import Trail from './trail.model';

// Nex
// Desolocamento
// Defesa
// Origem
// Trilha
// Proteção
// Resistencia 

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
    field: 'max_health_points',
    defaultValue: 0,
  })
    maxHealthPoints?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'sanity',
    defaultValue: 0,
  })
    sanity?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'max_sanity',
    defaultValue: 0,
  })
    maxSanity?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'effort_points',
    defaultValue: 0,
  })
    effortPoints?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'nex',
    defaultValue: 0,
  })
    nex?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'movement',
    defaultValue: 0,
  })
    movement?: string;

  @Column({
    type: DataType.INTEGER,
    field: 'defense',
    defaultValue: 0,
  })
    defense?: number;

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

  @ForeignKey(() => Origins)
  @Column({
    type: DataType.INTEGER,
    field: 'origin_id',
  })
    originId?: number;

  @BelongsTo(() => Origins, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    origin?: Origins;

  @ForeignKey(() => Trail)
  @Column({
    type: DataType.INTEGER,
    field: 'trail_id',
  })
    trailId?: number;

  @BelongsTo(() => Trail, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    trail?: Trail;

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