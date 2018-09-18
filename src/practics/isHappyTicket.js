/**
Задание
×
Счастливым билетом называют такой билет с шестизначным номером,
где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

isHappyTicket.js
Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым
(номер может быть как числового, так и строкового типа: см. примеры ниже).
Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

import isHappyTicket from './isHappyTicket';

isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
isHappyTicket('054702'); // true
Подсказки
Преобразовать число в строку можно с помощью функции String:

String(1234); // "1234"
Преобразовать строку в число можно с помощью функции Number:

Number("456"); // 456
Чтобы узнать длину строки, используйте свойство length:

'welcome'.length; // 7
Чтобы получить подстроку из строки, используйте метод substr:

'foo'.substr(1, 2); // 'oo';
*/

// BEGIN (write your solution here)
const isHappyTicket = (num) => {
  const str = String(num);
  const sumOfStart = Number(str[0]) + Number(str[1]) + Number(str[2]);
  const sumOfEnd = Number(str[3]) + Number(str[4]) + Number(str[5]);
  if (sumOfStart === sumOfEnd) {
    return true;
  }
  return false;
};
export default isHappyTicket;
// END

// Решение учителя
/*
isHappyTicket.js
// BEGIN
const sumDigits = (numberAsString) => {
  let sum = 0;
  for (let i = 0; i < numberAsString.length; i += 1) {
    sum += Number(numberAsString[i]);
  }
  return sum;
};

export default (number) => {
  const numberAsString = String(number);

  const leftPart = numberAsString.substr(0, 3);
  const rightPart = numberAsString.substr(3);

  return sumDigits(leftPart) === sumDigits(rightPart);
};
// END
*/
