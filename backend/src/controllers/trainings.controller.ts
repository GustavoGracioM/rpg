import { Request, Response } from 'express';
import trainingService from '../services/training.service';
import NotFound from '../middlewares/errors/NotFound.error';

const trainingController = {
  create: async (_req: Request, res: Response) => {
    const result = await trainingService.create();
    if (!result) throw new NotFound('class already created');
    res.status(201).json({ message: 'create' });
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await trainingService.findAll();
    res.status(200).json(result);
  },

  findById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await trainingService.findById(id);
    res.status(200).json(result);
  },
 
  delete: async (_req: Request, res: Response) => {
    await trainingService.delete();
    res.status(200).json({ message: 'deleted' });
  },

};

export default trainingController;
