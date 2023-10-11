import NotFound from '../middlewares/errors/NotFound.error';
import Training from '../models/training.model';
import defaultValues from '../utils/defaultValues';

const trainingService = {
  isExists: async () => {
    const trainingsResult = await Training.findAll();
    const result = trainingsResult
      .filter((tr) => defaultValues.trainingsValues
        .filter((tv) => tv.type !== tr.type));
    if (result.length > 1) throw new NotFound('trainings already exist');
  },

  create: async () => {
    await trainingService.isExists();
    return defaultValues.trainingsValues
      .map(async (val) => Training.create({ type: val.type, bonus: val.bonus }));
  },

  findAll: async () => Training.findAll(),

  findById: async (id:number) => Training.findByPk(id),

  findByName: async (type:string) => {
    const result = Training.findOne({ where: { type } });
    if (!result) throw new NotFound('not found training by id');
    return result;
  },

  delete: async () => Training.destroy({ where: {}, truncate: false }),

};

export default trainingService;