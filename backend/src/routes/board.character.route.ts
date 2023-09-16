import { Router } from 'express';
import boardCharacterController from '../controllers/board.character.controller';

const route = Router();

route.get('/', boardCharacterController.findAll);
route.post('/', boardCharacterController.create);
route.delete('/all', boardCharacterController.delete);
route.delete('/:id', boardCharacterController.deleteById);

export default route;