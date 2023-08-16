/**
 * @return {Generator<number>}
 */

// // 迭代
// var fibGenerator = function*() {
//   let pre = 0, cur = 1
//   yield pre
//   yield cur
//   while (true) {
//     yield pre + cur
//     // let t = pre 
//     // pre = cur
//     // cur += t
//     ;[pre, cur] = [cur, pre + cur]   // 以[]开头前面必须加分号

//   }
// }

// 递归
var fibGenerator = function*(pre = 0, cur = 1) {
  yield pre
  // cur = cur || 1
  yield *fibGenerator(cur, pre + cur)
}


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */