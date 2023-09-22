import User from '../models/user.model';
import NotFound from '../middlewares/errors/NotFound.error';
import IUser, { ILogin } from '../interfaces/user.interface';
import jwt from '../utils/jwt';

const excludePassword = { attributes: { 
  exclude: ['password'] } };

const userService = {
  isUserName: async (name:string) => {
    const result = await User.findOne({ where: { name } });
    if (result) throw new NotFound('user name already exists');
  }, 

  create: async ({ name, email, password }: IUser) => {
    const passwordEncode = jwt.encode({ password });
    const result = await User.create({
      name,
      email,
      password: passwordEncode,
    });
    return jwt.encode({ id: result.id, name: result.name, email: result.email });
  },

  login: async ({ email, password }: ILogin) => {
    const user = await User.findOne({ where: { email } });
    if (!user?.password) throw new NotFound('email or password invalid');
    const passwordDecode = jwt.decode(user.password).password;
    if (passwordDecode !== password) throw new NotFound('password invalid');
    return jwt.encode({ id: user.id, name: user.name, email: user.email });
  },

  verifyToken: async (token:string) => {
    const user = jwt.decode(token);
    const result = await User.findOne({ where: { email: user.email }, ...excludePassword });
    if (!result) throw new NotFound('token invalid');
    return user;
  },

  findAll: async () => User.findAll(excludePassword),

  findByUserName: async (name:string) => {
    const user = await User.findOne({ where: { name }, ...excludePassword });
    if (!user) throw new NotFound('not found user name');
    return user;
  },

  update: async (user: IUser) => {
    const result = await User.update(user, { where: { id: user.id } });
    if (result[0] < 1) throw new NotFound('id user invalid');
    return result;
  },

  delete: async () => User.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => { 
    const result = await User.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id user invalid');
    return result;
  },
};

export default userService;