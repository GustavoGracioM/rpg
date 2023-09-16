import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Character from './character.model';
import Board from './board.model';

@Table({
  tableName: 'history_roll',
  timestamps: false,
})
export default class HistoryRoll extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  })
    id?: number;

  @Column({
    type: DataType.INTEGER,
    field: 'amount',
  })
    amount?: number;

  @Column({
    type: DataType.STRING(255),
    field: 'return_message',
  })
    returnMessage?: string;

  @Column({
    type: DataType.STRING(255),
    field: 'type',
  })
    type?: string;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.INTEGER,
    field: 'character_id',
  })
    characterId?: number;

  @BelongsTo(() => Character)
    character?: Character;

  @ForeignKey(() => Board)
  @Column({
    type: DataType.INTEGER,
    field: 'board_id',
  })
    boardId?: number;

  @BelongsTo(() => Board)
    board?: Board;
}