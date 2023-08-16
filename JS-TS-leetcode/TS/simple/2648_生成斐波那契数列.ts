// // 迭代
// function* fibGenerator(): Generator<number, any, number> {
//   let pre = 0, cur = 1
//   yield pre 
//   yield cur
//   for (;;) {
//     yield pre + cur
//     ;[pre, cur] = [cur, pre + cur]
//   }
// }

// 递归
function* fibGenerator(pre: number = 0, cur: number = 1): Generator<number, any, number> {
  yield pre
  cur = pre + cur
  yield *fibGenerator(cur, pre + cur)
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

export {}