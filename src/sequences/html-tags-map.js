import {
  l,
  isEmpty,
  head,
  tail,
  cons,
  reverse,
} from "hexlet-pairs-data"; // eslint-disable-line
import {
  name,
  value,
  node,
  is,
  toString as htmlToString,
} from "hexlet-html-tags"; // eslint-disable-line
import { reverse as reverseStr } from '../utils/strings';
import { append, make } from './html';

/*
html - tags.js
Реализуйте и экспортируйте функцию map для библиотеки html - tags.
Реализация должна быть построена с использованием итеративного процесса
(без циклов, на основе рекурсии).
Эта функция подобна той что описывалась в теории для списков,
только текущая реализация работает с html - списком.
Параметры и их порядок у функций аналогичный.Первый - функция - трансформер, второй - коллекция
(в нашем случае список html - тегов).

import { make, append, node, value, is } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// Отображение в результате которого в html-списке заменяются теги h1 на теги h2
const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
  }
  return element;
}, dom3);
Реализуйте и экспортируйте функцию mirror, которая переворачивает содержимое тегов,
так чтобы читать его нужно было справа налево, а не слева направо.

  import { make, append, node, value, is, toString as htmlToString } from 'hexlet-html-tags';

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// <h1>emehcs</h1>
// <p>psil a si</p>
htmlToString(mirror(dom3));
Экспортируйте все созданные функции.

  Примечание
Функцию b2p можно использовать для наглядного сопоставления частного варианта операции
отображения с обобщённой реализацией операции отображения(собственно, map).

  Подсказки
Функция reverseStr(псевдоним функции reverse из модуля по работе со строками strings)
делает переворот строки.
*/

// BEGIN (write your solution here)
export const map = (func, list) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    return iter(tail(items), cons(func(head(items)), acc));
  };

  return iter(list, l());
};

export const mirror = (elements) => {
  map(element => node(name(element), reverseStr(value(element))), elements);
};
// END
/* ========================================= */

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

// Отображение в результате которого в html-списке заменяются теги h1 на теги h2
const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
  }
  return element;
}, dom3);
console.log(`Change h1 to h2 => ${htmlToString(processedDom)}`);

/* ========================================= */

// <h1>emehcs</h1>
// <p>psil a si</p>
console.log(`Function mirror => ${htmlToString(mirror(dom3))}`);

/* ========================================= */

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};

// teacher's

// BEGIN
// Рекурсивный процесс
// export const map = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }

//   return cons(func(head(elements)), map(func, tail(elements)));
// };

// Итеративный процесс (рекурсивно)
// export const map = (func, elements) => {
//   const iter = (items, acc) => {
//     if (isEmpty(items)) {
//       return reverse(acc);
//     }
//     return iter(tail(items), cons(func(head(items)), acc));
//   };

//   return iter(elements, l());
// };

// export const mirror = elements => (
//   map(element => node(name(element), reverseStr(value(element))), elements)
// );
// END
