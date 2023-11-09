import IBoardUser from '../interfaces/board.user.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import BoardUser from '../models/board.user';
import Board from '../models/board.model';
import User from '../models/user.model';

const returnFilter = {
  include: [{
    model: User,
    as: 'user',
    attributes: { 
      exclude: ['password'] },
  }, {
    model: Board,
    as: 'board',
  },
  ],
  attributes: { 
    exclude: ['boardId', 'userId'] },
};

const boardUserService = {
  create: async ({ boardId, userId }: IBoardUser) => BoardUser
    .create({ boardId, userId }),

  findAll: async () => BoardUser
    .findAll(returnFilter),

  findById: async (userId:number, status:string) => BoardUser
    .findAll({ ...returnFilter, where: { userId, status } }),

  findByCheckApproved: async (boardId:number, myFriends:User[]) => {
    const arrayPromise = myFriends.map(async (f) => {
      const result = await BoardUser.findOne({ where: { boardId, userId: f.dataValues.id } });
      return !result && f;
    });
    const arrayBool = await Promise.all(arrayPromise);
    const result = myFriends.filter((v, i) => arrayBool[i]);
    return result;
  },

  findByBoardId: async (boardId:number) => BoardUser
    .findAll({ ...returnFilter, where: { boardId, status: 'approved' } }),
  
  update: async (id: number, status:string) => {
    const result = await BoardUser.update({ status }, { where: { id } });
    if (result[0] < 1) throw new NotFound('id character invalid');
    return result;
  },

  delete: async () => BoardUser.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await BoardUser
      .destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id bordId or userId invalid');
    return result;
  },
};

export default boardUserService;