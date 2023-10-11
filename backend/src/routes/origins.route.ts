import { Router } from 'express';
import originsController from '../controllers/origins.controller';

const route = Router();

route.get('/', originsController.findAll);
route.get('/:id', originsController.findById);
route.post('/', originsController.create);
route.delete('/', originsController.delete);
route.delete('/:id', originsController.deleteById);

export default route;