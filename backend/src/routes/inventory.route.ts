import { Router } from 'express';
import inventoryController from '../controllers/inventory.controller';

const route = Router();

route.get('/', inventoryController.findAll);
route.get('/:id', inventoryController.findCharacter);
route.post('/', inventoryController.create);
route.delete('/', inventoryController.delete);
route.delete('/:id', inventoryController.deleteById);
route.put('/:id', inventoryController.update);

export default route;