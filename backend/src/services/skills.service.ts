import NotFound from '../middlewares/errors/NotFound.error';
import Skills from '../models/skills.model';
import defaultValue from '../utils/defaultValues';

const skillsService = {
  isExists: async () => {
    const skillsResult = await Skills.findAll();
    const result = skillsResult
      .filter((ski) => defaultValue.skillsValue
        .filter((val) => val.name !== ski.name));
    if (result.length > 1) throw new NotFound('skills already exist');
  }, 

  create: async () => {
    await skillsService.isExists();
    return defaultValue.skillsValue.map(async (val) => Skills.create(val));
  },

  findAll: async () => Skills.findAll(),

  delete: async () => Skills.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Skills.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id skills invalid');
    return result;
  },
};

export default skillsService;