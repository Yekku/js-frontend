/**
isPowerOfThree.js
Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree,
которая определяет, является ли переданное число натуральной степенью тройки.
Например, число 27 это третья степень(33), а 81 это четвертая(34).
*/
const isPowerOfThree = (num) => {
  let acc = 1;
  while (num > acc) {
    acc *= 3;
  }
  if (acc > num) {
    return false;
  }
  if (acc === num) {
    return true;
  }
};

export default isPowerOfThree;
// teacher's
/*
// BEGIN
export default (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};
// END
*/
console.log(isPowerOfThree(90));
console.log(isPowerOfThree(1)); // true (3^0)
console.log(isPowerOfThree(2)); // false
console.log(isPowerOfThree(9)); // true (3^2)
