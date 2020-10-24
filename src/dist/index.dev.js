"use strict";

// You should implement your task here.
module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  var ma = matrix;
  var arr = [];
  var flag = true;

  for (var i = 0; i < ma.length; i++) {
    if (flag == true) {
      for (var j = 0; j < ma[i].length; j++) {
        arr.push(ma[i][j]);
      }

      console.log(arr);
      flag = false;
      continue;
    } else if (flag == false) {
      ma[i].reverse();

      for (var _j = 0; _j < ma[i].length; _j += 1) {
        arr.push(ma[i][_j]);
      }

      console.log(arr);
      flag = true;
      continue;
    }
  }

  return arr;
};