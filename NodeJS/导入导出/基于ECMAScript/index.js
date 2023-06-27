/* 
* 目标： 基于 ECMAScript 标准语法，“命名”导入，工具属性和方法使用

通过命名导入，可以按需导入

*/
import { baseURL, getArraySum } from "./utils.js"

console.log(baseURL)

console.log(getArraySum([1,2,3,4,5,10]));
