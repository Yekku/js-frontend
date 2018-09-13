/*
Задание
×
Простое число — натуральное (целое положительное) число (больше единицы),
имеющее ровно два различных натуральных делителя — единицу и самого себя.

isPrime.js
Реализуйте и экспортируйте по умолчанию функцию isPrime определяющую, является ли число простым.

Пример:

isPrime(1); // false
isPrime(7); // true
isPrime(10); // false
*/

// BEGIN (write your solution here)
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

export default isPrime;
// END

// Решение учителя
/*
isPrime.js
// BEGIN
// Visualize Execution: https://goo.gl/lkO59x
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i += 1; // вместо i++;
  }
  return true;
};

export default isPrime;
// END
*/
