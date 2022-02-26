//return an object with sum of odd number and even number seprately

const arr = [3, 6, 9, 12, 15, 18, 21];

const sumOfOddEven = (acc, currentValue) =>
  currentValue % 2 === 0
    ? { ...acc, evenSum: acc.evenSum + currentValue }
    : { ...acc, oddSum: acc.oddSum + currentValue };

console.log(arr.reduce(sumOfOddEven, { oddSum: 0, evenSum: 0 }));
