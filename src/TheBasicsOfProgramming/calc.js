/*
Задание
×
calc.js
Функция calc представляет из себя простейший калькулятор, которому передается бинарная операция,
а также два числа, а на выходе получается результат применения операции к этим числам.

Реализуйте и экспортируйте по умолчанию функцию calc, аргументами которой являются:

Операция в виде строки. Поддерживаются +, -, /,*.
Первый операнд.
Второй операнд.
Если передается операция, которая не поддерживается, то функция должна вернуть NaN.

Примеры:

calc('+', 3, 10); // 13
calc('-', -8, 6); // -14
calc('$', 0, 9); // NaN
*/

// BEGIN (write your solution here)
export default (oper, a, b) => {
  let result;
  switch (oper) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      return NaN;
  }
  return result;
};
// END

// Решение учителя
/*
calc.js
// BEGIN
const calc = (operation, a, b) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

export default calc;
// END
*/
