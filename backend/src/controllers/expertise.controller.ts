import { Request, Response } from 'express';
import expertiseService from '../services/expertise.service';
import validateAttributes from '../utils/validateObject';
import IExpertise from '../interfaces/expertise.interface';

const expertiseController = {
  create: async (req: Request, res: Response) => {
    const { characterId } = req.body;
    delete req.body.characterId;
    const expertise = req.body as IExpertise;
    validateAttributes(expertise);
    const result = await expertiseService
      .create(expertise, characterId);
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await expertiseService.findAll();
    res.status(200).json(result);
  },

  findByPk: async (req:Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await expertiseService.findByPk(id);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => { 
    const id = parseInt(req.params.id, 10);
    const expertise = req.body as IExpertise;
    // validateAttributes(expertise);
    await expertiseService
      .update(expertise, id);
    res.status(201).json({ message: 'updated' });
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
