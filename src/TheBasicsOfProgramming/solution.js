import square from './squares';
import getTriangleArea from './myMathModule';
import { length, toUpperCase } from '../utils/strings';
/**
solution.js
Рассчитайте площадь поверхности сферы по формуле: S=4πR2.
Радиус равен пяти. Результат запишите в константу area.
 */

const pi = 3.14;

// BEGIN (write your solution here)
const r = 5;
const area = 4 * pi * r * r;
// END

export default area;

// Решение учителя
/*
solution.js
// BEGIN
const r = 5;
const area = 4 * pi * r * r;
// END
*/

/*
=====================================================================================

В файле solution.js:

Импортируйте getTriangleArea из модуля myMathModule.
Создайте функцию, которая принимает аргумент n и возвращает площадь треугольника
высотой n и основанием n2 / 2. Используйте функцию square.
Экспортируйте созданную функцию по умолчанию.

*/

// BEGIN (write your solution here)

export const triangleArea = n => getTriangleArea(n, square(n) / 2);

// END

/**
 * ====================================================================================
solution.js
Реализуйте функцию которая считает площадь треугольника
на основе известной стороны и прилегающих к ней углов.
Углы задаются в градусах. Экспортируйте ее по умолчанию.

Формула: eсли известна одна сторона треугольника и два прилежащих к ней угла,
то площадь данного треугольника вычисляется,
как половина квадрата данной стороны умноженная на дробь, в числителе которой,
произведение синусов прилежащих углов, а в знаменателе синус противолежащего угла.

Противолежащий угол вычисляется по формуле: 180 - сумма двух известных углов.

solution(3, 60, 60); // 3.89711431703
Подсказки:
Так как тригонометрические функции в Math работают с радианами,
вам будет необходимо преобразовывать градусы в радианы.
Напишите для этого вспомогательную функцию. Формула для расчета: градусы * пи / 180.
 */

// BEGIN (write your solution here)
const radians = degrees => degrees * (Math.PI / 180);

export const getArea = (side, angle1, angle2) => {
  const sin1 = Math.sin(radians(angle1));
  const sin2 = Math.sin(radians(angle2));
  const sin3 = Math.sin(Math.PI - radians(angle1 + angle2));
  return (1 / 2) * side * side * ((sin1 * sin2) / sin3);
};
// END

// Решение учителя
/*
solution.js
// BEGIN
const radians = degrees =>
  degrees * (Math.PI / 180);

export default (side, angle1, angle2) => {
  const sin1 = Math.sin(radians(angle1));
  const sin2 = Math.sin(radians(angle2));
  const sin3 = Math.sin(Math.PI - radians(angle1 + angle2));
  return (1 / 2) * side * side * ((sin1 * sin2) / sin3);
};
// END
*/

/* ========================================================
Задание
×
solution.js
Реализуйте и экспортируйте по умолчанию функцию,
которая делает заглавной первую букву каждого слова в предложении.

solution('hello, world!'); // Hello, World!
Подсказки
Вычисление длины строки: length(str).
Перевод строки/буквы в верхний регистр: toUpperCase(str).
*/
// BEGIN (write your solution here)
const solution = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    if (str[i] === str[0] || str[i - 1] === ' ') {
      result += toUpperCase(str[i]);
    } else {
      result += str[i];
    }
  }
  return result;
};
// END

console.log(solution('hello, world!')); // Hello, World!

// Решение учителя
/*
solution.js
// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }
  return result;
};
// END
*/
