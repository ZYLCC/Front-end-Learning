/* 
编写一个函数，这个函数接收一个整数数组 arr 和一个映射函数  fn ，通过该映射函数返回一个新的数组。

返回数组的创建语句应为 returnedArray[i] = fn(arr[i], i) 。

请你在不使用内置方法 Array.map 的前提下解决这个问题。
*/


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var map = function(arr, fn) {
//   const n = arr.length
//   let returnedArray = new Array(n)
//   for (let i = 0; i < n; i++) {
//     returnedArray[i] = fn(arr[i], i)
//   }
//   return returnedArray
// }

var map = function(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i)
  }
  return arr
}