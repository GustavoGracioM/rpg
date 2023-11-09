import { Request, Response } from 'express';
import boardUserService from '../services/board.user.service';
import IBoardUser from '../interfaces/board.user.interface';
import friendsListService from '../services/friends.list.service';

const boardUserController = {
  create: async (req: Request, res: Response) => {
    const { userId, boardId }: IBoardUser = req.body;
    const result = await boardUserService
      .create({ userId, boardId });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await boardUserService.findAll();
    res.status(200).json(result);
  },

  findById: async (req: Request, res: Response) => {
    const { userId, status }: { userId:number, status:string } = req.body;
    const result = await boardUserService.findById(userId, status);
    res.status(200).json(result);
  },

  findByCheckApproved: async (req: Request, res: Response) => {
    const { boardId, userId }: { boardId:number, userId:number } = req.body;
    const myFriends = await friendsListService.findMyFriends(userId);
    const result = await boardUserService.findByCheckApproved(boardId, myFriends);
    res.status(200).json(result);
  },

  findByBoardId: async (req: Request, res: Response) => {
    const boardId = parseInt(req.params.boardId, 10);
    const result = await boardUserService.findByBoardId(boardId);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { status }: { status:string } = req.body;
    await boardUserService.update(id, status);
    res.status(201).json({ message: `updated id=${id}` });
  },

  delete: async (_req: Request, res: Response) => {
    await boardUserService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await boardUserService.deleteById(id);
    res.status(200).json({ message: `deleted id=${id}` });
  },
};

export default boardUserController;
