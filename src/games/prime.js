import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 1;
const max = 100;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(number));
  for (let i = 2; i < limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const number = getRandomNumber(min, max);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  run(rule, getRound);
};
