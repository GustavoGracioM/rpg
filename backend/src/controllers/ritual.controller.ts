import { Request, Response } from 'express';
import IRitual from '../interfaces/ritual.interface';
import ritualService from '../services/ritual.service';

const ritualController = {
  create: async (req: Request, res: Response) => {
    const { name, characterId, type, circle, execution,
      reach, 
      target,
      duration,
      resistance }: IRitual = req.body;
    const result = await ritualService.create({ name, 
      characterId, 
      type,
      circle,
      execution,
      reach, 
      target,
      duration,
      resistance });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await ritualService.findAll();
    res.status(200).json(result);
  },

  findCharacter: async (req: Request, res: Response) => {
    const characterId = parseInt(req.params.id, 10);
    const result = await ritualService.findCharacter(characterId);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => { 
    const id = parseInt(req.params.id, 10);
    const { name, type, circle, execution,
      reach, 
      target,
      duration,
      resistance }: IRitual = req.body;
    await ritualService.update({ id,
      name,
      type,
      circle,
      execution,
      reach, 
      target,
      duration,
      resistance });
    res.status(201).json({ message: 'updated' });
  }, 

  delete: async (_req: Request, res: Response) => {
    await ritualService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await ritualService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default ritualController;
