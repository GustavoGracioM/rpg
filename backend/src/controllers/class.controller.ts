import { Request, Response } from 'express';
import classService from '../services/class.service';
import NotFound from '../middlewares/errors/NotFound.error';

const classController = {
  create: async (_req: Request, res: Response) => {
    const result = await classService.create();
    if (!result) throw new NotFound('class already created');
    res.status(201).json({ message: 'create' });
  },

  addClass: async (req: Request, res: Response) => {
    const { characterId, classId } = req.body;
    const result = await classService.addClass(characterId, classId);
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await classService.findAll();
    res.status(200).json(result);
  },

  delete: async (_req: Request, res: Response) => {
    await classService.delete();
    res.status(200).json({ message: 'deleted all' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await classService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default classController;
