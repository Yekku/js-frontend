/*
Задание
×
isPerfect.js
Создайте функцию isPerfect, которая принимает число и возвращает true,
если оно совершенное, и false — в ином случае.

Совершенное число — это положительное целое число, равное сумме его положительных делителей
(не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

Совершенное число (википедия)
Список совершенных чисел
*/

// BEGIN (write your solution here) (write your solution here)
const isPerfect = (num) => {
  let divisors = 0;
  for (let i = 0; i < num; i += 1) {
    if (num % i === 0) {
      divisors += i;
      if (num === 0) {
        return false;
      }
      if (num === divisors) {
        return true;
      }
    }
  }
  return false;
};
// END

export default isPerfect;

// Решение учителя
/*
isPerfect.js
// BEGIN (write your solution here)
const isPerfect = (num) => {
  if (num === 0) return false;

  let sum = 0;

  for (let divisor = 1; divisor < num; divisor += 1) {
    if (num % divisor === 0) sum += divisor;
  }

  return sum === num;
};
// END
*/
