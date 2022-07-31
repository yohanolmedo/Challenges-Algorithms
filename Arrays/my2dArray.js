let array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(arr) {
  // Write your code here
  let newArray = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      let sumTop = arr[r][c] + arr[r][c + 1] + arr[r][c + 2];
      let medium = arr[r + 1][c + 1];
      let sumBottom = arr[r + 2][c] + arr[r + 2][c + 1] + arr[r + 2][c + 2];
      let sumTotal = sumTop + medium + sumBottom;
      newArray.push(sumTotal);
    }
  }
  return Math.max(...newArray);
}

hourglassSum(array);
