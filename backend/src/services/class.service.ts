import Class from '../models/class.model';
import Character from '../models/character.model';
import defaultValue from '../utils/defaultValues';
import NotFound from '../middlewares/errors/NotFound.error';

const classService = {
  isExists: async () => {
    const classResult = await Class.findAll();
    const result = classResult
      .filter((cla) => defaultValue.classValue
        .filter((val) => val.type !== cla.type));
    if (result.length > 1) throw new NotFound('class already exist');
  },

  create: async () => {
    await classService.isExists();
    return defaultValue.classValue.map(async (val) => Class.create({ type: val.type }));
  },

  addClass: async (characterId: number, classId: number) => {
    await Character.update({ classId }, { where: { id: characterId } });
  },

  findAll: async () => Class.findAll(),

  delete: async () => Class.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Class.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id class invalid');
    return result;
  },
};

export default classService;