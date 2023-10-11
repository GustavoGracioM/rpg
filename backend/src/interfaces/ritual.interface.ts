interface IRitual {
  id?: number,
  name: string, 
  type: string[],
  circle: string,
  execution: string,
  reach: string,
  target: string,
  duration: string,
  resistance: string,
  characterId?: number
}

export default IRitual;