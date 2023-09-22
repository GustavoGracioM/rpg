import { Router } from 'express';
import boardUserController from '../controllers/board.user.controller';

const route = Router();

route.get('/', boardUserController.findAll);
route.post('/', boardUserController.create);
route.post('/filter', boardUserController.findById);
route.put('/:id', boardUserController.update);
route.delete('/all', boardUserController.delete);
route.delete('/:id', boardUserController.deleteById);

export default route;