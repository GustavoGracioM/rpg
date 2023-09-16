import { Request, Response } from 'express';
import skillsService from '../services/skills.service';
import NotFound from '../middlewares/errors/NotFound.error';

const skillsController = {
  create: async (_req: Request, res: Response) => {
    const result = await skillsService.create();
    if (!result) throw new NotFound('skills already created');
    res.status(201).json({ message: 'create' });
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await skillsService.findAll();
    res.status(200).json(result);
  },

  delete: async (_req: Request, res: Response) => {
    await skillsService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await skillsService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default skillsController;
