import { Router } from 'express';
import skillController from '../controllers/skill.controller';

const route = Router();

route.get('/', skillController.findAll);
route.get('/:id', skillController.findCharacter);
route.post('/', skillController.create);
route.delete('/', skillController.delete);
route.delete('/:id', skillController.deleteById);
route.put('/:id', skillController.update);

export default route;