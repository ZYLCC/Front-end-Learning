
var ArrayWrapper = function(nums) {
  this.nums = nums
}

ArrayWrapper.prototype.valueOf = function() {  // 将对象转换为基本类型值（当需要时会自动调用该方法），比如在 obj1 + obj2 时，需要两个对象都需要有可 “+” 的基本类型值
  return this.nums.reduce((pre, cur) => pre + cur, 0)
}

ArrayWrapper.prototype.toString = function() {
  return '[' + this.nums + ']'   // 隐式转换
}