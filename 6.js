const arr = [3, 6, 9, 12, 15, 18, 21];

const getValueInObj = (acc, currentValue, i) => ({ ...acc, [i]: currentValue });

arr.reduce(getValueInObj);
