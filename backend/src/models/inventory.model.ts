import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';

@Table({
  tableName: 'inventory',
  timestamps: false,
})
export default class Inventory extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
    id?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'item',
  })
    item?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'weight',
  })
    weight?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'description',
  })
    description?: string;

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