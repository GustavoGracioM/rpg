import { Router } from 'express';
import skillsController from '../controllers/skills.controller';

const route = Router();

route.get('/', skillsController.findAll);
route.post('/', skillsController.create);
route.delete('/', skillsController.delete);
route.delete('/:id', skillsController.deleteById);

export default route;