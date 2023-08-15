/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

/**
 * 知识点：
 * Promise.race() 静态方法接受一个 promise 可迭代对象作为输入，并返回一个 Promise。这个返回的 promise 会随着第一个 promise 的敲定而敲定。
 * 
 */

// var timeLimit = function(fn, t) {
// 	return async function(...args) {
//     return Promise.race([
//       fn(...args),
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           reject("Time Limit Exceeded")
//         }, t)
//       })
//     ])
//   }
// }


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */


/**
 * 输入的 fn 是 async 函数 
 */


/* *******新的思考******* */
/**
 * 因为用settimeout 模拟了超时情况，并且没有清除定时器，会导致无论结果怎么样，都会执行一次定时器。所以应该在成功执行后清除定时器。promise是链式调用，then、catch不用特殊处理，会自动到下一层，中间加了一层then对结果不会有影响。
 */

var timeLimit = function(fn, t) {
	return async function(...args) {
    let timer
    // Promise.race([]) 返回的也是一个 promise 所以可以链式调用 then
    return Promise.race([
      fn(...args),
      new Promise((res, rej) => {
        timer = setTimeout(() => rej("Time Limit Exceeded"), t)
      })
    ]).then(res => {
      clearTimeout(timer)
      return res
    })
  }
}