// Polyfill for map()
// Array.map((ele, i , arr) => { })

Array.prototype.myMap = function (cb) {
  var temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4];

const multiplyThree = nums.myMap((num, i, arr) => {
  return num * 3;
});

console.log(multiplyThree);

// Polyfill for filter()
// Array.filter((ele, i , arr) => { })

Array.prototype.myFilter = function (cb) {
  var temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const greaterFour = nums.myFilter((num, i, arr) => {
  return num > 4;
});

console.log(greaterFour);

// Polyfill for reduce()
// Array.reduce((acc, curr, i, arr) => { }, initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);
