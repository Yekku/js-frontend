/**
Задание
×
diff.js
Напишите функцию diff, которая принимает два угла (integer),
каждый от 0 до 360, и возвращает наименьшую разницу между ними.

Примеры:

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
*/

// BEGIN (write your solution here) (write your solution here)
const diff = (a, b) => {
  let big;
  let small;
  if (a >= b) {
    big = a;
    small = b;
  } else {
    big = b;
    small = a;
  }
  const result1 = big - small;
  const result2 = (360 - big) + small;
  if (result1 > result2) {
    return result2;
  }
  return result1;
};
// END
export default diff;

// Решение учителя
/*
diff.js
// BEGIN (write your solution here)
const diff = (a, b) => {
  const angle = Math.abs(a - b);
  const difference = angle > 180 ? 360 - angle : angle;
  return difference;
};
// END
*/
