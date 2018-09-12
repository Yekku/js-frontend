import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

/**
Все создаваемые функции, в рамках этого задания, должны быть реализованы независимо друг от друга,
то есть их нельзя использовать для реализации друг друга.

list.js
Реализуйте и экспортируйте функцию has, которая проверяет,
является ли переданное значение элементом списка.

const numbers = l(3, 4, 5, 8);
has(numbers, 8); // true
has(numbers, 0); // false

Реализуйте и экспортируйте функцию reverse, которая переворачивает список,
используя итеративный процесс.

const numbers = l(3, 4, 5);
reverse(numbers); // (5, 4, 3)

Реализуйте и экспортируйте функцию concat, которая соединяет два списка,
используя рекурсивный процесс (попробуйте сначала представить,
как работала бы функция copy, которая принимает на вход список и возвращает его копию).

const numbers = l(3, 4, 5, 8);
const numbers2 = l(3, 2, 9);
concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
 */

// BEGIN
export const has = (list, value) => {
  if (!isEmpty(list)) return false;
  if (head(list) === value) return true;
  return has(tail(list, value));
};

export const reverse = (list) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    return iter(tail(items), cons(head(items), acc));
  };
  return iter(list, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), concat(tail(list1), list2));
};

// export default { has, reverse, concat };
// END

// teacher's

/*
// BEGIN
export const has = (list, element) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === element) {
    return true;
  }

  return has(tail(list), element);
};

export const reverse = (list) => {
  const iter = (items, acc) =>
    (isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc)));

  return iter(list, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), concat(tail(list1), list2));
};
// END
*/
