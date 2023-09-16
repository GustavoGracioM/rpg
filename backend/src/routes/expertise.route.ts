import { Router } from 'express';
import expertiseController from '../controllers/expertise.controller';

const route = Router();

route.get('/', expertiseController.findAll);
route.get('/:id', expertiseController.findByPk);
route.post('/', expertiseController.create);
route.delete('/', expertiseController.delete);
route.delete('/:id', expertiseController.deleteById);
route.put('/:id', expertiseController.update);

export default route;