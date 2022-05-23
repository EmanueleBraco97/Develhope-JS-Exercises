function sum(...numbers) {
  return numbers.reduce((previousValue, currentValue) => previousValue+ currentValue);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));