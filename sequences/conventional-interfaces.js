import { l, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, name, toString as htmlToString, map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line
import { wc } from '../utils/utils'; // eslint-disable-line

/*
html - tags.js
Реализуйте и экспортируйте функцию extractHeaders, которая извлекает тексты всех заголовков h2 из переданного html и возвращает html в котором каждый из этих текстов обернут в p.

Например такой html в строковом представлении < h2 > header1</h2 > <h2>header2</h2> <p>content</p> превратится в такой < p > header1</p > <p>header2</p>.Ниже развернутый пример.

  import { node, append, make, reduce, toString as htmlToString } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
// => <h2>header1</h2><h2>header2</h2><p>content</p>

htmlToString(extractHeaders(html3));
// => <p>header1</p><p>header2</p>
Реализуйте и экспортируйте функцию wordsCount, которая считает вхождения слова в определенный тег.Для подсчета слов в тексте одного тега воспользуйтесь вспомогательной функцией wc, которая уже импортирована в модуль html - tags.

  import { make, append, node } from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1 lisp'));
const html2 = append(html1, node('p', 'content'));
const html3 = append(html2, node('h2', 'lisp header2 lisp'));
const html4 = append(html3, node('p', 'content lisp'));

wordsCount('h2', 'lisp', html4); // 3
Подсказки
Подсчет слов в тексте: wc(word, text), где word искомое слово, а text это текст, в котором ведется поиск.
*/

// BEGIN (write your solution here)
export const extractHeaders = (dom) => {
  const filterHeaders = filter(item => is('h2', item), dom);
  return map(element => node("p", value(element)), filterHeaders);
  // return map(element => {
  //   if (is("h2", element)) {
  //     return node("p", value(element));
  //   }
  //   return element;
  // }, dom);
};

export const wordsCount = (tagName, word, html) => {
  const filterTagName = filter(item => is(tagName, item), html);
  const values = map(element => value(element), filterTagName);
  return reduce((text, acc) => wc(word, text) + acc, 0, values);
};
// END

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));
// => <h2>header1</h2><h2>header2</h2><p>content</p>

console.log(htmlToString(extractHeaders(html3)));
// => <p>header1</p><p>header2</p>

const html4 = append(make(), node('h2', 'header1 lisp'));
const html5 = append(html4, node('p', 'content'));
const html6 = append(html5, node('h2', 'lisp header2 lisp'));
const html7 = append(html6, node('p', 'content lisp'));

console.log(wordsCount('h2', 'lisp', html7)); // 3

//teacher's
/**
 // BEGIN
export const extractHeaders = (elements) => {
  const filtered = filter(element => is('h2', element), elements);
  return map(element => node('p', value(element)), filtered);
};

export const wordsCount = (tagName, word, elements) => {
  const filtered = filter(element => is(tagName, element), elements);
  const values = map(element => value(element), filtered);
  return reduce((text, acc) => wc(word, text) + acc, 0, values);
};
// END
 */