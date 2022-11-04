import run from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers . ';

const findGcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return findGcd(y, x % y);
};

const getRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(findGcd(firstNumber, secondNumber));
  return [question, answer];
};

export default () => {
  run(rule, getRound);
};
