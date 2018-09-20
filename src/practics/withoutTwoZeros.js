/**
Задание
×
solution.js
Реализуйте и экспортируйте по умолчанию функцию,
которая принимает на вход два аргумента - количество нулей и количество единиц,
и определяет сколько есть способов размещения этих нулей и единиц так,
что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и двух единиц.
Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100.
В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100.
Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.

Примеры использования:

import withoutTwoZeros from './solution';

withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3), // 4
withoutTwoZeros(2, 4); // 10
*/

// BEGIN (write your solution here) (write your solution here)
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
const withoutTwoZeros = (n, m) => {
  if (m + 1 < n) {
    return 0;
  }

  return factorial(m + 1) / (factorial(m + 1 - n) * factorial(n));
};
export default withoutTwoZeros;
// END

// Решение учителя
/*
// BEGIN (write your solution here)
const withoutTwoZeros = (a, b) => {
  if (a > b + 1) {
    return 0;
  } else if (a === 0 || b === 0) {
    return 1;
  }

  return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);
};

export default withoutTwoZeros;
// END
*/
