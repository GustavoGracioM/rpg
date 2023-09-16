import { Request, Response } from 'express';
import IHistoryRoll from '../interfaces/history.roll.interface';
import historyRollService from '../services/history.roll.service';

const historyRollController = {
  create: async (req: Request, res: Response) => {
    const { amount, returnMessage, characterId, boardId, type }: IHistoryRoll = req.body;
    const result = await historyRollService
      .create({ amount, returnMessage, characterId, boardId, type });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await historyRollService.findAll();
    res.status(200).json(result);
  },

  findByBoardId: async (req: Request, res: Response) => {
    const { boardId }: { boardId: number } = req.body;
    const result = await historyRollService.findByBoardId(boardId);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => { 
    const id = parseInt(req.params.id, 10);
    const { amount, returnMessage, type }: IHistoryRoll = req.body;
    await historyRollService
      .update({ id, amount, returnMessage, type });
    res.status(201).json({ message: 'updated' });
  }, 

  delete: async (_req: Request, res: Response) => {
    await historyRollService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await historyRollService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default historyRollController;
