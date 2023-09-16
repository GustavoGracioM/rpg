import { Router } from 'express';
import attackController from '../controllers/attacks.controller';

const route = Router();

route.get('/', attackController.findAll);
route.get('/:id', attackController.findCharacter);
route.post('/', attackController.create);
route.delete('/', attackController.delete);
route.delete('/:id', attackController.deleteById);
route.put('/:id', attackController.update);

export default route;