type Fn = (accum: number, curr: number) => number

// function reduce(nums: number[], fn: Fn, init: number): number {
//   if (!nums.length) return init
//   else {
//     for (let i = 0; i < nums.length; i++) {
//       init = fn(init, nums[i])
//     }
//     return init
//   }
// }

// 使用内置方法 Array.reduce()

function reduce(nums: number[], fn: Fn, init: number): number {
  return nums.reduce((prev, cur) => {
    return fn(prev, cur)
  }, init)
}

export{}