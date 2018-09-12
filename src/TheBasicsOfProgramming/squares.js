/*
Задание
×
squares.js
Реализуйте функцию square, которая возвращает квадрат числа.
Реализуйте функцию sumOfSquares, которая возвращает сумму квадратов двух чисел.
Реализуйте функцию squareSumOfSquares, которая возвращает квадрат суммы квадратов двух чисел.
Примеры работы функций:

square(5); // 25
square(10); // 100
sumOfSquares(5, 10); // 125
sumOfSquares(10, -9); // 181
squareSumOfSquares(1, 1); // 4
squareSumOfSquares(2, 3); // 169
Обратите внимание на то, что самостоятельно вызывать их не надо.
Это делает проверяющая система в файле __tests__ / squares.tests.js

Подсказки
Функция square может быть использована внутри sumOfSquares
Функция sumOfSquares может быть использована внутри squareSumOfSquares
*/

// BEGIN (write your solution here)
const square = num => num * num;
const sumOfSquares = (a, b) => square(a) + square(b);
const squareSumOfSquares = (a, b) => square(sumOfSquares(a, b));
// END

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};

// Решение учителя
/**
squares.js
// BEGIN
const square = num => num * num;

const sumOfSquares = (num1, num2) =>
  square(num1) + square(num2);

const squareSumOfSquares = (num1, num2) =>
  square(sumOfSquares(num1, num2));
// END
 */
