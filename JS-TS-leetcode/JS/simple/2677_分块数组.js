/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
// var chunk = function(arr, size) {
  
//   const n = Math.floor(arr.length / size)
//   let res = Array.from({length: Math.floor(n)}, () => new Array(size).fill(0))
//   for (let i = 0; i < res.length; i++) {
//     for (let j = 0; j < size; j++) {
//       res[i][j] = arr[i * size + j] 
//     }
//   }
//   const last_n = arr.length % size
//   if (!last_n) { // 能被整除
//     return res
//   } else {
//     let lastArr = new Array(last_n).fill(0)
//     for (let i = 0; i < last_n; i++) {
//       lastArr[i] = arr[n * size + i]
//     }
//     res.push(lastArr)
//     return res
//   }
// }


// 使用Array.slice  区间为：[start, end)   且 end 可以大于 arr.length
var chunk = function(arr, size) {
  let res = []
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i+size))
  }
  return res
}