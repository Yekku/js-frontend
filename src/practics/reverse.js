import { length } from '../utils/strings';
/**
Задание
×
reverse.js
Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед,
используя рекурсию.

Например:

import reverse from './reverse';

reverse('str');    // rts
reverse('hexlet'); // telxeh
Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод substr.

Подсказки
Чтобы узнать длину строки, используйте свойство length:

'welcome'.length; // 7
Чтобы получить подстроку из строки, используйте метод substr:

'foo'.substr(1, 2); // 'oo';
*/

const reverse = (str) => {
  const len = length(str);
  if (len === 0) {
    return str;
  }
  return str[len - 1] + reverse(str.substr(0, len - 1));
};

export default reverse;

console.log(reverse('hexlet')); // 'telxeh'
console.log(reverse('str')); // 'rts'

// Решение учителя
/*
reverse.js
// BEGIN
const reverse = (str) => {
  const len = str.length;
  if (len === 0) {
    return str;
  }

  return str[len - 1] + reverse(str.substr(0, len - 1));
};

export default reverse;
// END
*/
