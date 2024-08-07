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

function fibsRec(n) {
  if (n < 0) {
    return 'Please enter a valid number';
  }
  if (n === 0) {
    return [];
  }
  if (n == 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  }
  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 3] + fibsRec(n-1)[n-2]];
} 

function testFibonacciFunctions(func) {
  console.log(func(-1)); // Please enter a valid number
  console.log(func(0)); // []
  console.log(func(1)); // [0]
  console.log(func(2)); // [0, 1]
  console.log(func(3)); // [0, 1, 1]
  console.log(func(5)); // [0, 1, 1, 2, 3]
  console.log(func(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
}


testFibonacciFunctions(fibs);
testFibonacciFunctions(fibsRec);
