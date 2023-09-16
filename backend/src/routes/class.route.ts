import { Router } from 'express';
import classController from '../controllers/class.controller';

const route = Router();

route.get('/', classController.findAll);
route.post('/', classController.create);
route.post('/add', classController.addClass);
route.delete('/', classController.delete);
route.delete('/:id', classController.deleteById);

export default route;