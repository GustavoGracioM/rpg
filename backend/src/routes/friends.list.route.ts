import { Router } from 'express';
import friendsListController from '../controllers/friends.list.controller';

const route = Router();

route.get('/', friendsListController.findAll);
route.post('/', friendsListController.create);
route.post('/invites', friendsListController.findInvites);
route.delete('/', friendsListController.delete);
route.delete('/:id', friendsListController.deleteById);
route.put('/', friendsListController.update);

export default route;