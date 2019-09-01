"use strict";

let p = [100, 0, 50];

Array.prototype.findMax = function() {
  return Math.max.apply(null, this);
};

Array.prototype.findMin = function() {
  return Math.min.apply(null, this);
};

console.log("Min value is: "+ p.findMin());
console.log("Max value is: " + p.findMax());