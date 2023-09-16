import IAttacks from '../interfaces/attacks.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import Attacks from '../models/attacks.model';

const attacksService = {
  create: async ({ name, dice, bonus, characterId }: IAttacks) => Attacks
    .create({ name, dice, bonus, characterId }),

  findAll: async () => Attacks.findAll(),

  findCharacter: async (characterId: number) => Attacks.findAll({ where: { characterId } }),

  update: async ({ id, name, dice, bonus }: IAttacks) => {
    const result = await Attacks.update({ name, dice, bonus }, { where: { id } });
    if (result[0] < 1) throw new NotFound('id attacks invalid');
    return result;
  },
 
  delete: async () => Attacks.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Attacks.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id attacks invalid');
    return result;
  },
};

export default attacksService;