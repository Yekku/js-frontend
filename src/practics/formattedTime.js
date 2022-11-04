/**
Задание
×
formattedTime.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут
(прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.

Пример:

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34
Подсказки
Используйте функцию Math.floor(number) для округления до нижней границы
*/

// BEGIN (write your solution here)
const formattedTime = (num) => {
  const isHour = Math.floor(num / 60);
  const isMinute = num % 60;
  const correctTime = `${isHour}:${isMinute}`;
  if (isHour >= 10 && isMinute < 10) {
    return `${isHour}:0${isMinute}`;
  }
  if (isHour < 10 && isMinute >= 10) {
    return `0${isHour}:${isMinute}`;
  }
  if (isHour < 10 && isMinute < 10) {
    return `0${isHour}:0${isMinute}`;
  }
  return correctTime;
};
export default formattedTime;
// END

// Решение учителя
/*
formattedTime.js
// BEGIN
export default (rawMinutes) => {
  const hours = Math.floor(rawMinutes / 60);
  const formattedHours = hours >= 10 ? hours : `0${hours}`;

  const minutes = rawMinutes % 60;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
};
// END
*/
