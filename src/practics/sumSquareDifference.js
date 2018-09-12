/*
sumSquareDifference.js
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это(1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.
Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает
разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
*/

const sumSquareDifference = (n) => {
  const square = (num) => {
    let result = 0;
    for (let i = 0; i <= n; i += 1) {
      result = i * i + square(num - 1);
    }
    return result;
  };
  const squareSum = (num2) => {
    let result = 0;
    for (let i = 0; i <= num2; i += 1) {
      result = i + result;
    }
    result *= result;
    return result;
  };
  return squareSum(n) - square(n);
};

console.log(sumSquareDifference(10));
