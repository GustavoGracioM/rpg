import { Request, Response } from 'express';
import NotFound from '../middlewares/errors/NotFound.error';
import trailService from '../services/trail.service';

const trailController = {
  create: async (_req: Request, res: Response) => {
    const result = await trailService.create();
    if (!result) throw new NotFound('trail already created');
    res.status(201).json({ message: 'create' });
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await trailService.findAll();
    res.status(200).json(result);
  },

  findByClassId: async (req: Request, res:Response) => {
    const classId = parseInt(req.params.id, 10);
    const result = await trailService.findByClassId(classId);
    res.status(200).json(result);
  },

  delete: async (_req: Request, res: Response) => {
    await trailService.delete();
    res.status(200).json({ message: 'deleted all' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await trailService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default trailController;
