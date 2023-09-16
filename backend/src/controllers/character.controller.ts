import { Request, Response } from 'express';
import characterService from '../services/character.service';
import ICharacter from '../interfaces/character.interface';

const characterController = {
  create: async (req: Request, res: Response) => {
    const { name, healthPoints, sanity, effortPoints, userId }: ICharacter = req.body;
    const result = await characterService
      .create({ name, healthPoints, sanity, effortPoints, userId });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await characterService.findAll();
    res.status(200).json(result);
  },

  findById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await characterService.findById(id);
    res.status(200).json(result);
  },

  findByUserId: async (req: Request, res: Response) => {
    const { id } = req.body;
    const result = await characterService.findByUserId(id);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { name, healthPoints, sanity, effortPoints, classId } = req.body;
    await characterService.update({ id, name, healthPoints, sanity, effortPoints, classId });
    res.status(201).json({ messgae: `updated id=${id}` });
  },

  delete: async (_req: Request, res: Response) => {
    await characterService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await characterService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default characterController;