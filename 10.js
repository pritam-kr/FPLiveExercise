const integer = [1, 3, 6, 9, 2, 4, 6, 8, 10, 12, 15, 13, 11, 17, 16];

//find the sum of odd num
const oddSum = (sum, currentValue) =>
  currentValue % 2 !== 0 ? sum + currentValue : sum;

integer.reduce(oddSum);

//find the sum of odd num at odd index
const oddIndexSum = (sum, currentValue, i) =>
  i % 2 !== 0 ? sum + currentValue : sum;

integer.reduce(oddIndexSum);

//find largets number in an array using reduce

const largeInteger = (a, b) => (b > a ? b : a);

integer.reduce(largeInteger, 0);

// find number divisible 10

const numDivisible10 = (num) => num % 10 === 0;

// console.log(...integer.filter(numDivisible10));

//return an array, odd number increment by 1 and even number decrement by 1

const incrementDecrementByOne = (num) => (num % 2 === 0 ? num + 1 : num - 1);

// console.log(integer.map(incrementDecrementByOne));

const oddEvenSum = (acc, currentValue) =>
  currentValue % 2 === 0
    ? { ...acc, evenNum: acc.evenNum + currentValue }
    : { ...acc, oddNum: acc.oddNum + currentValue };

// console.log(integer.reduce(oddEvenSum, { evenNum: 0, oddNum: 0 }));
