import { Request, Response } from 'express';
import skillService from '../services/skill.service';
import ISkill from '../interfaces/skill.interface';

const skillController = {
  create: async (req: Request, res: Response) => {
    const { name, characterId, description }: ISkill = req.body;
    const result = await skillService
      .create({ name, description, characterId });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await skillService.findAll();
    res.status(200).json(result);
  },

  findCharacter: async (req: Request, res: Response) => {
    const characterId = parseInt(req.params.id, 10);
    const result = await skillService.findCharacter(characterId);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => { 
    const id = parseInt(req.params.id, 10);
    const { name, description }: ISkill = req.body;
    await skillService
      .update({ id, name, description });
    res.status(201).json({ message: 'updated' });
  }, 

  delete: async (_req: Request, res: Response) => {
    await skillService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await skillService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default skillController;
