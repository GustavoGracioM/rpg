import { Router } from 'express';
import expertiseController from '../controllers/expertise.controller';

const route = Router();

route.get('/', expertiseController.findAll);
route.post('/', expertiseController.create);
route.delete('/', expertiseController.delete);
route.delete('/:id', expertiseController.deleteById);

export default route;