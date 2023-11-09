import { Router } from 'express';
import ritualController from '../controllers/ritual.controller';

const route = Router();

route.get('/', ritualController.findAll);
route.get('/:id', ritualController.findCharacter);
route.post('/', ritualController.create);
route.delete('/', ritualController.delete);
route.delete('/:id', ritualController.deleteById);
route.put('/:id', ritualController.update);

export default route;