import { Request, Response } from 'express';
import boardService from '../services/board.service';

const boardController = {
  create: async (req: Request, res: Response) => {
    const { name, userId }: { name: string, userId: number } = req.body;
    const result = await boardService
      .create({ name, userId });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await boardService.findAll();
    res.status(200).json(result);
  },

  findById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await boardService.findById(id);
    res.status(200).json(result);
  },

  findByUserId: async (req: Request, res: Response) => {
    const { userId }: { userId:number } = req.body;
    const result = await boardService.findByUserId(userId);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => { 
    const id = parseInt(req.params.id, 10);
    const { name }: { name: string } = req.body;
    await boardService
      .update({ id, name });
    res.status(201).json({ message: 'updated' });
  }, 

  delete: async (_req: Request, res: Response) => {
    await boardService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await boardService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default boardController;
