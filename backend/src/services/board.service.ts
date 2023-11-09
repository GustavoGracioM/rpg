import NotFound from '../middlewares/errors/NotFound.error';
import Board from '../models/board.model';
import User from '../models/user.model';

const returnFilter = {
  include: {
    model: User,
    as: 'user',
    attributes: { 
      exclude: ['password'] },
  }, 
};

const boardService = {
  create: async ({ name, userId }: { name: string, userId: number }) => Board
    .create({ name, userId }),

  findAll: async () => Board.findAll(),

  findById: async (id: number) => Board.findByPk(id, returnFilter),

  findByUserId: async (userId: number) => Board.findAll({ where: { userId } }),

  update: async ({ id, name }: { id: number, name: string }) => {
    const result = await Board.update({ name }, { where: { id } });
    if (result[0] < 1) throw new NotFound('id board invalid');
    return result;
  },
 
  delete: async () => Board.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Board.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id board invalid');
    return result;
  },
};

export default boardService;