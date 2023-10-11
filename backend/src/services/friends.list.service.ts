import { Op } from 'sequelize';
import IFriendsList from '../interfaces/friends.list.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import FriendsList from '../models/friends.list.model';
import User from '../models/user.model';

const innerJoin = {
  include: [{
    model: User,
    as: 'user',
    attributes: { 
      exclude: ['password'] },
  }, {
    model: User,
    as: 'friend',
    attributes: { 
      exclude: ['password'] },
  }],
};

const friendsListService = {
  isFriends: async (userId:number, friendId:number) => {
    const status = 'approved';
    const result = await FriendsList
      .findOne({ 
        where: { 
          [Op.or]: [{ userId, friendId, status }, 
            { userId: friendId, friendId: userId, status }] } });
    if (result) throw new NotFound('they are already friends');
  },

  create: async ({ userId, friendId, status }: IFriendsList) => FriendsList
    .create({ userId, friendId, status }),

  findAll: async () => FriendsList.findAll(),

  findInvites: async (friendId: number) => FriendsList
    .findAll({ ...innerJoin, where: { friendId, status: 'pending' } }),

  findMyFriends: async (userId: number) => {
    const result = await FriendsList
      .findAll({ ...innerJoin, 
        where: { [Op.or]: 
      [{ userId, status: 'approved' }, { friendId: userId, status: 'approved' }] } });
    const myFriends = result.map((f) => (f.friendId === userId ? f.user : f.friend)); 
    if (myFriends.length < 1) throw new NotFound('não tem amigos');
    return myFriends as User[];
  },

  update: async ({ userId, friendId, status }: IFriendsList) => {
    const result = await FriendsList.update({ status }, { where: { userId, friendId } });
    if (result[0] < 1) throw new NotFound('friend id invalid');
    return result;
  },
 
  delete: async () => FriendsList.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await FriendsList.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('friend id invalid');
    return result;
  },
};

export default friendsListService;