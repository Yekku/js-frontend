/**
Задание
×
areBracketsBalanced.js
Реализуйте и экспортируйте функцию по умолчанию,
которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок,
и проверяет является ли эта строка корректной.
Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной),
если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры.
У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.
*/

// BEGIN (write your solution here)
const areBracketsBalanced = (str) => {
  const len = str.length;
  if (len === 0) {
    return true;
  }
  if (len % 2 !== 0) {
    return false;
  }
  let acc = 0;
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    if (symbol === '(') {
      acc += 1;
    } else {
      acc -= 1;
    }
    if (acc < 0) {
      return false;
    }
  }
  return acc === 0;
};

export default areBracketsBalanced;
// END

// Решение учителя
/*
areBracketsBalanced.js
// BEGIN
export default (str) => {
  let acc = 0;
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    acc = symbol === '(' ? acc + 1 : acc - 1;
    if (acc < 0) {
      return false;
    }
  }
  return acc === 0;
};
// END
*/
