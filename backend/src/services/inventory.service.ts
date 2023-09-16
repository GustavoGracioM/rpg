import IInventory, { IInventoryInfo } from '../interfaces/inventory.interface';
import NotFound from '../middlewares/errors/NotFound.error';
import Inventory from '../models/inventory.model';

const inventoryService = {
  create: async ({ item, weight, characterId }: IInventory) => Inventory
    .create({ item, weight, characterId }),

  findAll: async () => Inventory.findAll(),

  findCharacter: async (characterId: number) => Inventory.findAll({ where: { characterId } }),

  update: async ({ id, item, weight }: IInventoryInfo) => {
    const result = await Inventory.update({ item, weight }, { where: { id } });
    if (result[0] < 1) throw new NotFound('id inventory invalid');
    return result;
  },

  delete: async () => Inventory.destroy({ where: {}, truncate: false }),

  deleteById: async (id: number) => {
    const result = await Inventory.destroy({ where: { id }, truncate: false });
    if (result < 1) throw new NotFound('id inventory invalid');
    return result;
  },
};

export default inventoryService;