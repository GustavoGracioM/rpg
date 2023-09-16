import { Request, Response } from 'express';
import boardCharacterService from '../services/board.character.service';
import IBoardCharacter from '../interfaces/boardCharacter.interface';

const boardCharacterController = {
  create: async (req: Request, res: Response) => {
    const { characterId, boardId }: IBoardCharacter = req.body;
    const result = await boardCharacterService
      .create({ characterId, boardId });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await boardCharacterService.findAll();
    res.status(200).json(result);
  },

  delete: async (_req: Request, res: Response) => {
    await boardCharacterService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const { characterId, boardId }: IBoardCharacter = req.body;
    await boardCharacterService.deleteById({ characterId, boardId });
    res.status(200).json({ message: `deleted id= ${characterId} + ${boardId}}` });
  },
};

export default boardCharacterController;
