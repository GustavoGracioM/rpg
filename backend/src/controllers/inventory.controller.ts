import { Request, Response } from 'express';
import inventoryService from '../services/inventory.service';
import IInventory from '../interfaces/inventory.interface';
import validateAttributes from '../utils/validateObject';

const inventoryController = {
  create: async (req: Request, res: Response) => {
    const { item, weight, characterId }: IInventory = req.body;
    const result = await inventoryService
      .create({ item, weight, characterId });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await inventoryService.findAll();
    res.status(200).json(result);
  },

  findCharacter: async (req: Request, res: Response) => {
    const characterId = parseInt(req.params.id, 10);
    const result = await inventoryService.findCharacter(characterId);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => { 
    const id = parseInt(req.params.id, 10);
    const { item, weight }: IInventory = req.body;
    validateAttributes({ item, weight });
    await inventoryService
      .update({ id, item, weight });
    res.status(201).json({ message: 'updated' });
  }, 

  delete: async (_req: Request, res: Response) => {
    await inventoryService.delete();
    res.status(200).json({ message: 'deleted' });
  },

  deleteById: async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    await inventoryService.deleteById(id);
    res.status(200).json({ message: `deleted id= ${id}` });
  },
};

export default inventoryController;
