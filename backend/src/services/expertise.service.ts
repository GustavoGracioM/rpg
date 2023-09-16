import IExpertise from '../interfaces/expertise.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import Character from '../models/character.model';
import Expertise from '../models/expertise.model';

const expertiseService = {

  create: async (expertise: IExpertise, characterId: number) => {
    const result = await Expertise.create({ ...expertise });
    await Character.update({ expertiseId: result.id }, { where: { id: characterId } });
    return result;
  },

  findAll: async () => Expertise.findAll(),

  findByPk: async (id:number) => Expertise.findByPk(id),

  update: async (expertise: IExpertise, id: number) => {
    const result = await Expertise.update(expertise, { where: { id } });
    if (result[0] < 1) throw new NotFound(`expertise id=${expertise.id} invalid`);
    return result;
  }, 

  delete: async () => Expertise.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Expertise.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound(`expertise id=${id} invalid`);
    return result;
  },
};

export default expertiseService;