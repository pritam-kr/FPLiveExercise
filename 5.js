//return an array with string which have vowel

const fruits = ['apple', 'mango', 'orang', 'papaya', 'fghb'];

const vowel = ['a', 'e', 'i', 'o', 'u'];

const getFruitArray = (fruit) => {
  for (char of fruit) {
    console.log(char);

    if (vowel.includes(char)) {
      return true;
    }
  }

  return false;
};

console.log(fruits.filter(getFruitArray));

//  for(l of "letter"){
//    console.log(l)
//  }
