import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

/*
Реализуйте и экспортируйте функцию reduce для библиотеки html-tags:

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

reduce((element, acc) => {
  return is('h1', element) ? acc + 1 : acc;
}, 0, html3); // 2

Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество пустых тегов. Тип тега задается первым параметром функции.


const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));
const html4 = append(html3, node('blockquote', ''));
const html5 = append(html4, node('blockquote', ''));
const html6 = append(html5, node('blockquote', 'quote'));

emptyTagsCount('blockquote', html6); // 2
Примечание
Функцию headersCount можно использовать для наглядного сопоставления частного варианта свёртки с обобщённой реализацией операции отображения (собственно, reduce).
*/

// BEGIN (write your solution here)
export const reduce = (func, acc, elements) => {
  if (isEmpty(elements)) {
    return acc;
  }

  return reduce(func, func(head(elements), acc), tail(elements));
};

export const emptyTagsCount = (tagName, elements) => {
  const predicate = element => is(tagName, element) && value(element) === "";
  const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
  return reduce(func, 0, elements);
};
// END

const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};

// // // //
const html11 = append(make(), node("h1", "header1"));
const html12 = append(html11, node("h1", "header2"));
const html13 = append(html12, node("p", "content"));

const check = reduce(
  (element, acc) => {
    return is("h1", element) ? acc + 1 : acc;
  },
  0,
  html13
); // 2

console.log("How many tag h1 => " + check);

// // // //
const html21 = make();
const html22 = append(html21, node("h1", "scheme"));
const html23 = append(html22, node("p", "is a lisp"));
const html24 = append(html23, node("blockquote", ""));
const html25 = append(html24, node("blockquote", ""));
const html26 = append(html25, node("blockquote", "quote"));

console.log("How many empty tag => " + emptyTagsCount("blockquote", html26)); // 2

//teacher's
/*
// BEGIN
export const reduce = (func, acc, elements) => {
  if (isEmpty(elements)) {
    return acc;
  }

  return reduce(func, func(head(elements), acc), tail(elements));
};

export const emptyTagsCount = (tagName, elements) => {
  const predicate = element => is(tagName, element) && value(element) === '';
  const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
  return reduce(func, 0, elements);
};
// END
*/