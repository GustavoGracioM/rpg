import NotFound from '../middlewares/errors/NotFound.error';
import Trail from '../models/trail.model';
import trailValues from '../utils/trailValues';
import classService from './class.service';

const trailService = {
  isExists: async () => {
    const resultTrail = await Trail.findAll();
    const result = resultTrail
      .filter((t) => trailValues
        .filter((v) => v.name !== t.name));
    if (result.length > 1) throw new NotFound('trail already exist');
  },

  create: async () => {
    await trailService.isExists();
    return trailValues.map(async ({ name, className }) => {
      const returnClass = await classService.findByName(className);
      if (!returnClass) throw new NotFound('not found class');
      return Trail.create({ name, classId: returnClass.id });
    });
  },  

  findAll: async () => Trail.findAll(),

  findByClassId: async (classId:number) => Trail.findAll({ where: { classId } }),

  delete: async () => Trail.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Trail.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id class invalid');
    return result;
  },
};

export default trailService;