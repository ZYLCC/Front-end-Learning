type ReturnObj = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): ReturnObj {
  let copy = init
  const res = {
    increment() {
      return ++init
    },
    decrement() {
      return --init
    },
    reset() {
      return init = copy
    }
  }
  return res
}

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/

export {}