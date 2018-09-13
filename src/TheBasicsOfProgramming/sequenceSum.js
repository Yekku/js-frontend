/**
Задание
×
sequenceSum.js
Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum,
которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями:
begin - начало последовательности, end - конец последовательности.
Например:
begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6.
Сумма такой последовательности будет: 20.

import sequenceSum from './sequenceSum';

sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
Подсказки
Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой".
Вычислить сумму чисел такой последовательности не представляется возможным,
в этом случае возвращаем NaN
Сумма чисел последовательности, в которой begin === end, равна begin (или end)
// NaN (т.к. это "пустая" последовательность)
sequenceSum(7, 2);

// 0 (т.к. это единственное число, входящее в последовательность)
sequenceSum(0, 0);
// 6 (т.к. это единственное число, входящее в последовательность)
sequenceSum(6, 6);
В файле sequenceSum.test.js можно посмотреть все варианты параметров,
с которыми будет вызвана ваша функция.
*/

const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
  // END
};

export default sequenceSum;

// const sequenceSum = (begin, end) =>
// (begin > end) ? NaN : (begin === end) ? end : begin + sequenceSum(++begin, end);

// Решение учителя
/*
sequenceSum.js
// BEGIN
// Visualize Execution: https://goo.gl/UlTxCs
if (begin > end) {
  return NaN;
} else if (begin === end) {
  return begin;
}
return begin + sequenceSum(begin + 1, end);
  // END
  */
