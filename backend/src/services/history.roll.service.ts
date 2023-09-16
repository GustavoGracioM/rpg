import IHistoryRoll from '../interfaces/history.roll.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import Character from '../models/character.model';
import HistoryRoll from '../models/history.roll.model';

const returnFilter = {
  include: [{
    model: Character,
    as: 'character',
    // attributes: { 
    //   exclude: ['id'] },
  }],
};

const historyRollService = {
  create: async ({ amount, characterId, returnMessage, type, boardId }: IHistoryRoll) => {
    const result = HistoryRoll.create({ amount, characterId, returnMessage, type, boardId });
    return result;
  },

  findAll: async () => HistoryRoll.findAll(),

  findByBoardId: async (boardId: number) => HistoryRoll
    .findAll({ ...returnFilter, where: { boardId } }),

  update: async ({ id, amount, characterId, returnMessage, type }: IHistoryRoll) => {
    const result = await HistoryRoll
      .update({ amount, characterId, returnMessage, type }, { where: { id } });
    if (result[0] < 1) throw new NotFound('id history roll invalid');
    return result;
  },
 
  delete: async () => HistoryRoll.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await HistoryRoll.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id history roll invalid');
    return result;
  },
};

export default historyRollService;