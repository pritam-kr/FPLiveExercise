// const getLessThanTen = (num) =>
//   num < 10 ? 'Number is less than 10' : 'Number is greater than 10';

// console.log(getLessThanTen(12));

const arr = [2, 5, 7, 12, 45, 9, 20, 36, 14];

const getNum = (num) => num < 10;

arr.filter(getNum);
