interface ICharacter {
  id?: number,
  name: string,
  healthPoints: number,
  sanity: number,
  effortPoints: number
  userId?: number,
  classId?: number
}

export default ICharacter;