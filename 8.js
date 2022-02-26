// given an aaray of number return an object for each number

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18];

// const arrSum = (acc, currentValue) => acc + currentValue;

// console.log(arr.reduce(arrSum));

// const objArr = (acc, currentValue, i) => ({...acc, [i]: currentValue})

// console.log(arr.reduce(objArr))

const objArray = (num) => ({ arr: num });

// console.log(...arr.map( objArray));
