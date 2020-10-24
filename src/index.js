
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }
  let ma = matrix;
  let arr = [];
  let flag = true;

  for (let i = 0; i < ma.length; i++) {
    if (flag == true) {
      for (let j = 0; j < ma[i].length; j++) {
        arr.push(ma[i][j]);
      }
      console.log(arr);
      flag = false;
      continue;
    } else
    if (flag == false) {
      ma[i].reverse();
      for (let j = 0; j < ma[i].length; j += 1) {
        arr.push(ma[i][j]);
      }
      console.log(arr);
      flag = true;
      continue;
    }
    
  }
  return arr;
};



