import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers . ';
const min = 1;
const max = 100;

const findGcd = (x, y) => (y === 0 ? x : findGcd(y, x % y));

const getRound = () => {
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const question = `${number1} ${number2}`;
  const answer = String(findGcd(number1, number2));
  return [question, answer];
};

export default () => {
  run(rule, getRound);
};
