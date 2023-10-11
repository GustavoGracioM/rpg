export interface IInventoryInfo {
  id?: number,
  item: string, 
  weight: string,
  description: string
}

interface IInventory extends IInventoryInfo {
  characterId: number
}

export default IInventory;