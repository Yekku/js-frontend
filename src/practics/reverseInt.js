/**
Задание
×
solution.js
Реализуйте и экспортируйте по умолчанию функцию reverseInt,
которая переворачивает цифры в переданном числе и возвращает новое число.

reverseInt(13); // 31
reverseInt(-123); // -321
Подсказки
Длина строки str находится так: str.length
*/

const reverseInt = (num) => {
  let numer = Math.abs(num);
  numer += '';
  let result = numer
    .split('')
    .reverse()
    .join('');
  result = Number(result);
  return num > 0 ? result : -result;
};
export default reverseInt;

// Решение учителя
/*
solution.js
// BEGIN
const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';
  let i = numAsStr.length - 1;

  while (i >= 0) {
    reversedStr += numAsStr[i];
    i -= 1;
  }
  const reversedModule = Number(reversedStr);

  return num < 0 ? -reversedModule : reversedModule;
};

export default reverseInt;
// END
*/
