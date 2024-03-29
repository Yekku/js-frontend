import { cons, car, cdr, toString as pairToString } from "hexlet-pairs"; // eslint-disable-line
import {
  cons as consList,
  l,
  random,
  head,
  reverse,
} from "hexlet-pairs-data"; // eslint-disable-line

/**
game.js
Допишите логику функции run, которая содержит ядро игрового движка.

Алгоритм
Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или равно 0,
то обновляем лог и возвращаем наружу. Игра закончена.

В ином случае, берем рандомную карту, вычисляем урон, записываем новое здоровье,
а также добавляем строчку в лог, используя формат:

const message = `Игрок '${name1}' применил '${cardName}'
  против '${name2}' и нанес урон '${damage}'`;
Повторяем.

Подсказки
Параметр order в функции iter нужен для определения того, какой игрок сейчас атакует.
Формат записи лога cons(cons(health1, health2), message).
Используйте функцию random для выбора карты из колоды.
*/

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
    let stats;
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(
    iter(startHealth, player1, startHealth, player2, 1, l(logItem)),
  );
};

export default cards => (name1, name2) => run(name1, name2, cards);

// teachers'
/**
// BEGIN
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
    let stats;
    // В логе игроки всегда должны быть на своих местах. Первый игрок слева, второй - справа
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    // Хитрость решения учителя состоит в том, что данные игроков всегда меняются местами. Это видно
    // по вызову ниже. Параметры первого игрока становятся параметрами второго и наоборот.
    // Такой подход позволяет упростить логику и всегда считать что атакует игрок номер 1.
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    // END
 */
