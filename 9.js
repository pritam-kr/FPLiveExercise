const arrayString = [
  'pritam',
  'apple',
  'shubham',
  'elephant',
  'house',
  'water',
  'rahul',
  'red',
  'pink',
  'blue',
  'orange',
  'zzzz',
];

//return an array wich have vowel

const getVowelArray = (string) => {
  const vowel = ['a', 'e', 'i', 'o', 'u'];

  for (char of string) {
    if (vowel.includes(char)) {
      return true;
    }
  }

  return false;
};

arrayString.filter(getVowelArray);

// return  an array of object, key as string and value as length of string

const arrayObj = (acc, currentString) => ({
  ...acc,
  [currentString]: currentString.length,
});

// console.log(arrayString.reduce(arrayObj, 0));

const arrObject = (str) => ({ [str]: str.length });

arrayString.map(arrObject);
