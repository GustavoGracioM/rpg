import NotFound from '../middlewares/errors/NotFound.error';
import Board from '../models/board.model';

const boardService = {
  create: async ({ name, userId }: { name: string, userId: number }) => Board
    .create({ name, userId }),

  findAll: async () => Board.findAll(),

  findById: async (id: number) => Board.findByPk(id),

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