import { length } from '../utils/strings';

/**
Задание
×
reverse.js
Реализуйте и экспортируйте по умолчанию функцию reverse, которая переворачивает строку.

Пример:

reverse('hello, world!'); // !dlrow ,olleh
Подсказки
Для подсчета длины строки используйте функцию length из модуля strings. Пример: length('cat'); // 3
*/

// BEGIN (write your solution here)
export default (str) => {
  let newString = '';
  for (let i = length(str) - 1; i >= 0; i -= 1) {
    newString += str[i];
  }
  return newString;
};
// END

// Решение учителя
/*
reverse.js
// BEGIN
export default (str) => {
  let i = length(str) - 1;

  let result = '';
  while (i >= 0) {
    result += str[i];
    i -= 1;
  }

  return result;
};
// END
*/
/* ===============================================

const reverse = (str) => {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};
*/

/*
2. reverse() method for arrays
In case when your interviewer didn’t specifically ask you to avoid
using a built -in reverse() method you can should definitely take advantage of it.
In JavaScript reverse() method exists only for arrays, so first we need to use split()
to transform string into an array, then apply reverse()
method and finally join() it all back together:
*/

const reverse = str => str.split('').reverse().join('');

console.log(reverse('hello'));

/* ============================================================
5. recursion
And the last, but most certainly not the least approach to
solving reverse string problem is recursion.
Basically we are making the function call itself string.length until
it hits our base case: an empty string. Every time we chop the first
character of the string off using substr() method, and then add it to the end of the string.
*/

const reverse2 = (str) => {
  if (str === '') {
    return str;
  }
  return reverse2(str.substr(1)) + str[0];
};

console.log(reverse2('hello'));

// One way to refactor our recursion would be to use ternary operator:

const reverse3 = str => (str ? reverse3(str.substr(1)) + str[0] : str);

console.log(reverse3('hello'));
