import { Router } from 'express';
import characterController from '../controllers/character.controller';

const route = Router();

route.post('/user', characterController.findByUserId);
route.get('/:id', characterController.findById);
route.get('/', characterController.findAll);
route.post('/', characterController.create);
route.delete('/', characterController.delete);
route.delete('/:id', characterController.deleteById);
route.put('/:id', characterController.update);

export default route;