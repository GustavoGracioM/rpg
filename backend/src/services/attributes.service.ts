import Attributes from '../models/attributes.model';
import Character from '../models/character.model';
import IAttributes from '../interfaces/attributes.interface';
import NotFound from '../middlewares/errors/NotFound.error';

const attributesService = {

  create: async ({ agilidade, forca, intelecto, presenca, vigor, characterId }: IAttributes) => {
    const result = await Attributes.create({
      agilidade,
      forca,
      intelecto,
      presenca,
      vigor,
    });
    await Character.update({ attributesId: result.id }, { where: { id: characterId } });
  },

  findAll: async () => Attributes.findAll(),

  findByPk: async (id:number) => Attributes.findByPk(id),

  update: async (attributes: IAttributes) => {
    const result = await Attributes.update(attributes, { where: { id: attributes.id } });
    if (result[0] < 1) throw new NotFound('id attribute invalid');
    return result;
  },

  delete: async () => Attributes.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => { 
    const result = await Attributes.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id attributes invalid');
    return result;
  },
};

export default attributesService;