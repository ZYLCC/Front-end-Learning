/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let copy = init
  // function increment() {
  //   return ++copy
  // }
  const increment = function() {
    return ++copy
  }
  function decrement() {
    return --copy
  }
  function reset() {
    return copy = init
  }
  return {
    increment, 
    decrement,
    reset
  }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */