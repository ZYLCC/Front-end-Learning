function chunk(arr: any[], size: number): any[][] {
  // let res: number[][] = []
  let res: Array<Array<number>> = []
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i+size))
  return res
}
export{}