/* 
* 目标： 基于 ECMAScript 标准语法，“默认”导入，工具属性和方法使用
*/
// 默认导入
import obj from './utils(default).js'

console.log(obj)

const res = obj.arraySum([2,4,6,8])
console.log(res)