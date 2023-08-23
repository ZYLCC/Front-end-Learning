class ArrayWrapper {
  private _nums: number[]
  // constructor(nums: Array<number>) {}
  constructor(nums: number[]) {
    this._nums = nums
  }

  valueOf() {
    return this._nums.reduce((pre, cur) => pre + cur, 0)
  }

  toString() {
    // return '[' + this._nums + ']'
    return `[${this._nums}]`
  }
}

export{}