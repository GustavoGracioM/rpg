import { Request, Response } from 'express';
import IAttacks from '../interfaces/attacks.interface';
import attacksService from '../services/attacks.service';

const attacksController = {
  create: async (req: Request, res: Response) => {
    const { name, dice, bonus, characterId }: IAttacks = req.body;
    const result = await attacksService
      .create({ name, dice, bonus, characterId });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await attacksService.findAll();
    res.status(200).json(result);
  },

  findCharacter: async (req: Request, res: Response) => {
    const characterId = parseInt(req.params.id, 10);
    const result = await attacksService.findCharacter(characterId);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => { 
    const id = parseInt(req.params.id, 10);
    const { name, dice, bonus }: IAttacks = req.body;
    await attacksService
      .update({ id, name, dice, bonus });
    res.status(201).json({ message: 'updated' });
  }, 

  delete: async (_req: Request, res: Response) => {
    await attacksService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await attacksService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default attacksController;
