function fibs(n) {
  if (n < 0) {
    return 'Please enter a valid number';
  }
  let fibArray = [];
  for (let i = 0; i < n; i++) {
    if (fibArray.length !== n) {
      if (i <= 1) {
        fibArray[i] = i;
      }
      else {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];  
      }
    }
  }
  return fibArray;
}

console.log(fibs(-1)); // Please enter a valid number
console.log(fibs(0)); // []
console.log(fibs(1)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(3)); // [0, 1, 1]
console.log(fibs(5)); // [0, 1, 1, 2, 3]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]


