/*
Задание
×
myMathModule.js
В файле myMathModule.js:

Создайте функцию getTriangleArea, которая принимает два аргумента h и b
и вычисляет площадь треугольника по формуле A = 1 / 2 * h * b,
где h — высота, а b — основание треугольника.

  Пример:

getTriangleArea(5, 10) === 25;
getTriangleArea(15, 12) === 90;
Экспортируйте функцию.

*/

export const getTrianglePerimeter = (a, b, c) => a + b + c;

// BEGIN (write your solution here)
export const getTriangleArea = (h, b) => (h * b) / 2;

// END
