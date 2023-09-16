import ICharacter from '../interfaces/character.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import Attributes from '../models/attributes.model';
import Character from '../models/character.model';
import Class from '../models/class.model';
import Expertise from '../models/expertise.model';

const returnFilter = {
  include: [{
    model: Attributes,
    as: 'attributes',
    attributes: { 
      exclude: ['id'] },
  }, {
    model: Class,
    as: 'class',
    attributes: { 
      exclude: ['id'] },
  },
  {
    model: Expertise,
    as: 'expertise',
    attributes: { 
      exclude: ['id'] },
  },
  ],
  attributes: { 
    exclude: ['classId'] },
};

const characterService = {
  create: async ({ name, healthPoints, sanity, effortPoints, userId }: ICharacter) => {
    const result = await Character.create({ name, healthPoints, sanity, effortPoints, userId });
    return result; 
  },

  findAll: async () => Character.findAll(returnFilter),

  findById: async (id: number) => Character.findByPk(id, returnFilter),

  findByUserId: async (userId: number) => Character.findAll({ ...returnFilter, where: { userId } }),

  update: async (character: ICharacter) => {
    const result = await Character
      .update(character, { where: { id: character.id } });
    if (result[0] < 1) throw new NotFound('id character invalid');
    return result;
  },

  delete: async () => Character.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Character.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id character invalid');
    return result;
  },
};

export default characterService;