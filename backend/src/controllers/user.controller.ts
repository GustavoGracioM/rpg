import { Request, Response } from 'express';
import userService from '../services/user.service';
import IUser from '../interfaces/user.interface';
import validateAttributes from '../utils/validateObject';

const userController = {
  
  create: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const result = await userService
      .create({ name, email, password });
    res.status(201).json({ token: result });
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await userService.login({ email, password });
    res.status(200).json({ token: result });
  },

  verifyToken: async (req: Request, res: Response) => {
    const { token } = req.body;
    const result = await userService.verifyToken(token);
    res.status(200).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await userService.findAll();
    res.status(200).json(result);
  },

  findByUserName: async (req: Request, res: Response) => {
    const { name } = req.body;
    const result = await userService.findByUserName(name);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { name, email, password }: IUser = req.body;
    validateAttributes({ name, email, password });
    await userService
      .update({ id, name, email, password });
    res.status(201).json({ message: `updated id= ${id}` });
  },

  delete: async (_req: Request, res: Response) => {
    await userService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await userService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default userController;
