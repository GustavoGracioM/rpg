import { Request, Response } from 'express';
import expertiseService from '../services/expertise.service';
import NotFound from '../middlewares/errors/NotFound.error';

const expertiseController = {
  create: async (_req: Request, res: Response) => {
    const result = await expertiseService.create();
    if (!result) throw new NotFound('expertise already created');
    res.status(201).json({ message: 'create' });
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await expertiseService.findAll();
    res.status(200).json(result);
  },

  delete: async (_req: Request, res: Response) => {
    await expertiseService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await expertiseService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default expertiseController;
