// Infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    else return a;
  };
}

console.log(add(4)(5)(6)());

// curry() implementation
// Converts f(a, b, c) into f(a)(b)(c);

function curry(func) {
  return function curriedFunc(...args) {
    if (func.length <= args.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(3)(4)(5)(6));
