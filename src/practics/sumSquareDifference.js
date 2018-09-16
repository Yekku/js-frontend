/*
sumSquareDifference.js
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это(1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает
разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
*/

// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (n) => {
  const square = (num) => {
    let result = 0;
    let i = 0;
    while (i <= num) {
      result += i * i;
      i += 1;
    }
    return result;
  };
  const squareSum = (nb) => {
    let result = 0;
    let i = 0;
    while (i <= nb) {
      result += i;
      i += 1;
    }
    result *= result;
    return result;
  };
  return squareSum(n) - square(n);
};
// END

console.log(sumSquareDifference(10));

// Решение учителя
/*
sumSquareDifference.js
// BEGIN (write your solution here)
const sumOfSquares = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i * i;
    i += 1;
  }
  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i += 1;
  }
  return sum * sum;
};

const sumSquareDifference = n => squareOfSum(n) - sumOfSquares(n);
// END
*/
