import { Router } from 'express';
import boardController from '../controllers/board.controller';

const route = Router();

route.get('/', boardController.findAll);
route.get('/:id', boardController.findById);
route.post('/', boardController.create);
route.post('/user', boardController.findByUserId);
route.delete('/', boardController.delete);
route.delete('/:id', boardController.deleteById);
route.put('/:id', boardController.update);

export default route;