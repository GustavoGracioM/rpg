interface ICharacter {
  id?: number,
  name: string,
  healthPoints: number,
  maxHealthPoints?: number,
  sanity: number,
  maxSanity?: number,
  effortPoints: number
  userId?: number,
  classId?: number, 
  originId?:number, 
  trailId?:number
}

export default ICharacter;