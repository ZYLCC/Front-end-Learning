type F = (x: number) => number;

// function compose(functions: F[]): F {
// 	return function(x) {
//     if (!functions.length) return x
//     else {
//       functions = functions.reverse()
//       for (let i = 0; i < functions.length; i++) {
//         x = functions[i](x)
//       }
//       return x
//     }
//   }
// }

// 使用 reduceRight 从数组右边开始

function compose(functions: F[]): F {
	return function(x) {
    return functions.reduceRight((prev, cur) => {
      return cur(prev) 
    }, x)
  }
}

export{}


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */