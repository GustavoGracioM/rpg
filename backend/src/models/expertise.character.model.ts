import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';
import Expertise from './expertise.model';
import Trainings from './training.model';

@Table({
  tableName: 'expersite_character',
  timestamps: false,
})
export default class ExpersiteCharacter extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
    id?: number;

  @ForeignKey(() => Trainings)
  @Column({
    type: DataType.INTEGER,
    field: 'training_id',
  })
    trainingId?: number;

  @BelongsTo(() => Trainings, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
    trainings?: Trainings;

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
}