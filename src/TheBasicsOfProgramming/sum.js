/*
Задание
×
sum.js
Реализуйте и экспортируйте функцию по умолчанию, которая считает сумму всех натуральных чисел,
меньших чем n (первый аргумент), которые делятся на числа a или b
(второй и третий аргументы) без остатка.
n - может быть только натуральным числом.

// 1 % 2 || 1 % 4
// 2 % 2 || 2 % 4
// ...
// 9 % 2 || 9 % 4
sum(10, 2, 4); // 20
*/

// BEGIN (write your solution here)
export default (n, a, b) => {
  let result = 0;
  for (let i = n - 1; i > 0; i -= 1) {
    if (i % a === 0 || i % b === 0) {
      result += i;
    }
  }
  return result;
};
// END

// Решение учителя
/*
sum.js
// BEGIN
// Visualize Execution: https://goo.gl/YayUTP
export default (num, divisor1, divisor2) => {
  let sum = 0;
  for (let i = 1; i < num; i += 1) {
    if (i % divisor1 === 0 || i % divisor2 === 0) {
      sum += i;
    }
  }
  return sum;
};
// END
*/
