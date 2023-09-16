interface IHistoryRoll {
  id?: number,
  characterId?: number,
  amount: number,
  returnMessage: string,
  type: string,
  boardId?: number
}

export default IHistoryRoll;