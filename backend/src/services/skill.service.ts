import ISkill from '../interfaces/skill.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import Skill from '../models/skill.model';

const skillService = {
  create: async ({ name, characterId, description }: ISkill) => Skill
    .create({ name, characterId, description }),

  findAll: async () => Skill.findAll(),

  findCharacter: async (characterId: number) => Skill.findAll({ where: { characterId } }),

  update: async ({ id, name, description }: ISkill) => {
    const result = await Skill.update({ name, description }, { where: { id } });
    if (result[0] < 1) throw new NotFound('id skill invalid');
    return result;
  },

  delete: async () => Skill.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Skill.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id skill invalid');
    return result;
  },
};

export default skillService;