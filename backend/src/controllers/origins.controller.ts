import { Request, Response } from 'express';
import originsSerice from '../services/origins.service';

const originsController = {
  create: async (_req: Request, res: Response) => {
    await originsSerice.create();
    res.status(201).json({ message: 'create' });
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await originsSerice.findAll();
    res.status(200).json(result);
  },

  findById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await originsSerice.findById(id);
    res.status(200).json(result);
  },

  delete: async (_req: Request, res: Response) => {
    await originsSerice.delete();
    res.status(200).json({ message: 'deleted all' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await originsSerice.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default originsController;
