import { Request, Response } from 'express';
import IFriendsList from '../interfaces/friends.list.interface';
import friendsListService from '../services/friends.list.service';

const friendsListController = {
  create: async (req: Request, res: Response) => {
    const { userId, friendId, status }: IFriendsList = req.body;
    const result = await friendsListService
      .create({ userId, friendId, status });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await friendsListService.findAll();
    res.status(200).json(result);
  },

  findInvites: async (req: Request, res: Response) => {
    const { friendId }: { friendId: number } = req.body;
    const result = await friendsListService.findInvites(friendId);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => { 
    const { userId, friendId, status }: IFriendsList = req.body;
    await friendsListService
      .update({ userId, friendId, status });
    res.status(201).json({ message: 'updated' });
  }, 

  delete: async (_req: Request, res: Response) => {
    await friendsListService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await friendsListService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default friendsListController;
