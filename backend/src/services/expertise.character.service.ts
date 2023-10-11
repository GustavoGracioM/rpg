import IExpertiseCharacter from '../interfaces/expertise.character';
import NotFound from '../middlewares/errors/NotFound.error';
import ExpersiteCharacter from '../models/expertise.character.model';
import Expertise from '../models/expertise.model';
import trainingService from './training.service';

const expertiseCharacterSerivice = {  
  getTrainings: async () => {
    const untrained = await trainingService.findByName('destreinado');
    const trained = await trainingService.findByName('treinado');
    if (!untrained || !trained) throw new NotFound('not found trainigs');
    return { untrained, trained };
  },

  create: async ({ expertisesIds, characterId }: IExpertiseCharacter) => {
    const expertise = await Expertise.findAll();
    const { untrained, trained } = await expertiseCharacterSerivice.getTrainings();
    expertise.forEach((exp) => {
      if (expertisesIds && exp.id && expertisesIds.includes(exp.id)) {
        ExpersiteCharacter
          .create({ trainingId: trained.id, characterId, expertiseId: exp.id });
      } else {
        ExpersiteCharacter.create({ expertiseId: exp.id, characterId, trainingId: untrained.id });
      }
    });
  },

  findAll: async () => ExpersiteCharacter.findAll(),

  findByCharacterId: async (characterId:number) => ExpersiteCharacter
    .findAll({ where: { characterId } }),

  update: async (id:number, trainingId:number) => {
    const result = await ExpersiteCharacter.update({ trainingId }, { where: { id } });
    if (result[0] < 1) throw new NotFound('id expertise-character invalid');
    return result;
  },

  delete: async () => ExpersiteCharacter.destroy({ where: {}, truncate: false }),
};

export default expertiseCharacterSerivice;