'use strict';

module.exports = {
  square: function square(n) {
    return n * n;
  },
  add: function add(nums) {
    return nums.reduce(function(sum, n) {
      return sum + Number(n);
    }, 0);
  },
  double: function double(n) {
    return n * 2;
  },
  cube: function cube(n) {
    return n * n * n;
  },
  multiply: function multiply(nums) {
    return nums.reduce(function(prod, n) {
      return prod * Number(n);
    }, 1);
  }
}

// exports.square = function(n) {
//   return n * n;
// }
// exports.sum = nums => nums.reduce((sum, n) => sum + Number(n), 0);
// exports.double = n => n * 2;
// exports.cube = n => n * n * n;