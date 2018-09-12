#!/usr/bin/env node

import { l, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { has, reverse, concat } from '../sequences/list';

// console.log(`The result is: ${result}`);
const numbers = l(3, 4, 5);
const numbers2 = l(3, 2, 9);
console.log(listToString(reverse(numbers))); // (5, 4, 3)
console.log(has(numbers, 8)); // false
console.log(listToString(concat(numbers, numbers2))); // (3, 4, 5, 3, 2, 9)
