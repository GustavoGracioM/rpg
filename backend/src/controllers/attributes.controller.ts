import { Request, Response } from 'express';
import attributesService from '../services/attributes.service';
import IAttributes from '../interfaces/attributes.interface';

const attributesController = {
  
  create: async (req: Request, res: Response) => {
    const { agilidade, forca, intelecto, presenca, vigor, characterId } = req.body;
    const result = await attributesService
      .create({ agilidade, forca, intelecto, presenca, vigor, characterId });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await attributesService.findAll();
    res.status(200).json(result);
  },

  findByPk: async (req:Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const result = await attributesService.findByPk(id);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { agilidade, forca, intelecto, presenca, vigor }: IAttributes = req.body;
    await attributesService
      .update({ id, agilidade, forca, intelecto, presenca, vigor });
    res.status(201).json({ message: `updated id= ${id}` });
  },

  delete: async (_req: Request, res: Response) => {
    await attributesService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await attributesService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default attributesController;
