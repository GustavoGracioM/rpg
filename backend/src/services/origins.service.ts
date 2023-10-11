import NotFound from '../middlewares/errors/NotFound.error';
import Origins from '../models/origins.model';
// import Skills from '../models/skills.model';
import originsValues from '../utils/originsValues';
import skillsService from './expertise.service';

const originsSerice = {
  isExists: async () => {
    const resultOrigins = await Origins.findAll();
    const result = resultOrigins
      .filter((o) => originsValues
        .filter((v) => v.name !== o.name));
    if (result.length > 1) throw new NotFound('origins already exist');
  },

  create: async () => {
    await originsSerice.isExists();
    originsValues.map(async ({ name, expertises }) => {
      const x = expertises.map(async (e) => skillsService.findByName(e));
      const t = (await Promise.all(x)).map((h) => h && h.id);
      return Origins.create({ name, expertisesIds: t });
    });
  },

  findAll: async () => Origins.findAll(),

  findById: async (id:number) => Origins.findByPk(id),

  delete: async () => Origins.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Origins.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id class invalid');
    return result;
  },
};

export default originsSerice;