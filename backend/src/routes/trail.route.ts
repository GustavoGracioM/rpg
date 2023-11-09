import { Router } from 'express';
import trailController from '../controllers/trail.controller';

const route = Router();

route.get('/:id', trailController.findByClassId);
route.get('/', trailController.findAll);
route.post('/', trailController.create);
route.delete('/', trailController.delete);
route.delete('/:id', trailController.deleteById);

export default route;