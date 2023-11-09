import { Request, Response } from 'express';
import IExpertiseCharacter from '../interfaces/expertise.character';
import expertiseCharacterSerivice from '../services/expertise.character.service';

const expertiseCharacterController = {
  create: async (req: Request, res: Response) => {
    const { characterId, expertisesIds }: IExpertiseCharacter = req.body;
    const result = await expertiseCharacterSerivice.create({ characterId, expertisesIds });
    res.status(201).json(result);
  },

  findAll: async (_req: Request, res: Response) => {
    const result = await expertiseCharacterSerivice.findAll();
    res.status(200).json(result);
  },

  findByCharacterId: async (req: Request, res: Response) => {
    const characterId = parseInt(req.params.id, 10);
    const result = await expertiseCharacterSerivice.findByCharacterId(characterId);
    res.status(200).json(result);
  },

  update: async (req: Request, res: Response) => { 
    const id = parseInt(req.params.id, 10);
    const { trainingId }: { trainingId:number } = req.body;
    await expertiseCharacterSerivice
      .update(id, trainingId);
    res.status(201).json({ message: 'updated' });
  }, 

  delete: async (_req: Request, res: Response) => {
    await expertiseCharacterSerivice.delete();
    res.status(200).json({ message: 'deleted' });
  },
};

export default expertiseCharacterController;
