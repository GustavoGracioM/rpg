import IBoardCharacter from '../interfaces/boardCharacter.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import BoardCharacter from '../models/board.character';
import Board from '../models/board.model';
import Character from '../models/character.model';

const returnFilter = {
  include: [{
    model: Character,
    as: 'character',
  }, {
    model: Board,
    as: 'board',
  },
  ],
  attributes: { 
    exclude: ['boardId', 'characterId'] },
};

const boardCharacterService = {
  create: async ({ boardId, characterId }: IBoardCharacter) => 
    BoardCharacter
      .create({ boardId, characterId }),

  findAll: async () => BoardCharacter
    .findAll(returnFilter),

  delete: async () => BoardCharacter.destroy({ where: {}, truncate: false }),

  deleteById: async ({ boardId, characterId }: IBoardCharacter) => {
    const result = await BoardCharacter
      .destroy({ where: { boardId, characterId }, truncate: false });
    if (result < 1) throw new NotFound('id bordId or characterId invalid');
    return result;
  },
};

export default boardCharacterService;