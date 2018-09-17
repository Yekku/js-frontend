/**
Задание
×
fizzBuzz.js
Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log)
в терминал числа в диапазоне от begin до end.
При этом:

Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях выводится само число
Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно).
Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.

Пример
Вызов функции:

fizzBuzz(11, 20);
Вывод в терминале:

11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz

Это задание крайне часто задают на собеседованиях.
*/

/* eslint-disable no-console */

// BEGIN (write your solution here)
const fizzBuzz = (a, b) => {
  let start = a;

  for (start; start <= b; start += 1) {
    if (start % 3 === 0 && start % 5 === 0) {
      console.log('FizzBuzz');
    } else if (start % 3 === 0 && start % 5 !== 0) {
      console.log('Fizz');
    } else if (start % 3 !== 0 && start % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(start);
    }
  }
  return '';
};
export default fizzBuzz;
// END

// Решение учителя
/*
fizzBuzz.js
// BEGIN
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0;
    const hasBuzz = i % 5 === 0;
    const fizzPart = hasFizz ? 'Fizz' : '';
    const buzzPart = hasBuzz ? 'Buzz' : '';
    console.log(hasFizz || hasBuzz ? `${fizzPart}${buzzPart}` : i);
  }
};

export default fizzBuzz;
// END
*/
