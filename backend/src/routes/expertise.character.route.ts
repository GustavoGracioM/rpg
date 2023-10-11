import { Router } from 'express';
import expertiseCharacterController from '../controllers/expertise.character.controller';

const route = Router();

route.get('/', expertiseCharacterController.findAll);
route.get('/:id', expertiseCharacterController.findByCharacterId);
route.post('/', expertiseCharacterController.create);
route.put('/:id', expertiseCharacterController.update);
route.delete('/', expertiseCharacterController.delete);

export default route;