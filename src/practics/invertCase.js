/**
Задание
×
invertCase.js
Реализуйте и экспортируйте по умолчанию функцию invertCase,
которая меняет в строке регистр каждой буквы на противоположный.

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js
Подсказки
Чтобы узнать длину строки, используйте свойство length:

'welcome'.length; // 7
Чтобы получить строку (или отдельный символ) в верхнем регистре, используйте метод toUpperCase:

'foo'.toUpperCase(); // 'FOO';
'f'.toUpperCase();   // 'F';
Чтобы получить строку (или отдельный символ) в нижнем регистре, используйте метод toLowerCase:

'BAR'.toLowerCase(); // 'bar';
'b'.toLowerCase();   // 'b';
*/

const invertCase = (str) => {
  let newString = '';
  for (let i = 0; i < str.length; i += 1) {
    const isUpper = str[i] === str[i].toUpperCase();
    newString += isUpper ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return newString;
};

export default invertCase;

console.log(invertCase('Hello, World!'));

/**
// BEGIN (write your solution here)
const invertCase = (str) => {
  let newString = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i].toUpperCase()) {
      newString += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      newString += str[i].toUpperCase();
    }
  }

  return newString;
};
export default invertCase;
// END
*/

// Решение учителя
/*
invertCase.js
// BEGIN
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const upper = str[i] === str[i].toUpperCase();
    result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return result;
};

export default invertCase;
// END
*/
