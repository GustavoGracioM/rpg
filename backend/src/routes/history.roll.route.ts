import { Router } from 'express';
import historyRollController from '../controllers/history.roll.controller';

const route = Router();

route.get('/', historyRollController.findAll);
route.post('/board', historyRollController.findByBoardId);
route.post('/', historyRollController.create);
route.delete('/', historyRollController.delete);
route.delete('/:id', historyRollController.deleteById);
route.put('/:id', historyRollController.update);

export default route;