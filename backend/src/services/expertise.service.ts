import NotFound from '../middlewares/errors/NotFound.error';
import Expertise from '../models/expertise.model';
import defaultValue from '../utils/defaultValues';

const expertiseService = {
  isExists: async () => {
    const expertiseResult = await Expertise.findAll();
    const result = expertiseResult
      .filter((exp) => defaultValue.expertiseValues
        .filter((val) => val.name !== exp.name));
    if (result.length > 1) throw new NotFound('expertise already exist');
  }, 

  create: async () => {
    await expertiseService.isExists();
    return defaultValue.expertiseValues.map(async (val) => Expertise.create(val));
  },

  findAll: async () => Expertise.findAll(),

  findByName: async (name: string) => Expertise.findOne({ where: { name } }),

  delete: async () => Expertise.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Expertise.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id expertise invalid');
    return result;
  },
};

export default expertiseService;