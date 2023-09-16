import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
/* eslint-disable import/no-cycle */
import Board from './board.model';
import Character from './character.model';

@Table({
  tableName: 'board_character',
  timestamps: false,
})
export default class BoardCharacter extends Model {
  @ForeignKey(() => Board)
  @Column({
    type: DataType.INTEGER,
    field: 'board_id',
  })
    boardId?: number;

  @BelongsTo(() => Board)
    board?: Board;

  @ForeignKey(() => Character)
  @Column({
    type: DataType.INTEGER,
    field: 'character_id',
  })
    characterId?: number;

  @BelongsTo(() => Character)
    character?: Character;
}