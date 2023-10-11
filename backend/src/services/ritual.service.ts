import IRitual from '../interfaces/ritual.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import Ritual from '../models/ritual.model';

const ritualService = {
  create: async ({ name, 
    characterId, type, circle, execution, reach, target, duration, resistance }: IRitual) => Ritual
    .create({ name, characterId, type, circle, execution, reach, target, duration, resistance }),

  findAll: async () => Ritual.findAll(),

  findCharacter: async (characterId: number) => Ritual.findAll({ where: { characterId } }),

  update: async ({ 
    id, name, type, circle, execution, reach, target, duration, resistance }: IRitual) => {
    const result = await Ritual.update({ name,
      type,
      circle,
      execution,
      reach, 
      target,
      duration,
      resistance }, { where: { id } });
    if (result[0] < 1) throw new NotFound('id ritual invalid');
    return result;
  },
 
  delete: async () => Ritual.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Ritual.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id ritual invalid');
    return result;
  },
};

export default ritualService;