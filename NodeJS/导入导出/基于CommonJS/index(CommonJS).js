/* 
* 目标：基于 CommonJS 标准语法，导入工具属性和方法使用
*/
// 导入
const obj = require('./utils(CommonJS).js')
console.log(obj)

console.log(obj.url)

const res = obj.arraySum([1,2,3,4,5])
console.log(res)