import { Router } from 'express';
import attributesController from '../controllers/attributes.controller';

const route = Router();

route.get('/', attributesController.findAll);
route.get('/:id', attributesController.findByPk);
route.post('/', attributesController.create);
route.delete('/', attributesController.delete);
route.delete('/:id', attributesController.deleteById);
route.put('/:id', attributesController.update);

export default route;