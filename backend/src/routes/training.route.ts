import { Router } from 'express';
import trainingController from '../controllers/trainings.controller';

const route = Router();

route.get('/:id', trainingController.findById);
route.get('/', trainingController.findAll);
route.post('/', trainingController.create);
route.delete('/', trainingController.delete);

export default route;