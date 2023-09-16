import { Router } from 'express';
import userController from '../controllers/user.controller';

const route = Router();
const user = '/user';

route.post('/login', userController.login);
route.post('/verify', userController.verifyToken);
route.post('/register', userController.create);

route.get(user, userController.findAll);
route.post(`${user}/name`, userController.findByUserName);
route.delete(user, userController.delete);
route.delete(`${user}/:id`, userController.deleteById);
route.put(`${user}/:id`, userController.update);

export default route;