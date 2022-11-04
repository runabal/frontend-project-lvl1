import run from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const limit = Math.floor(number / 2);

  for (let i = 2; i < limit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const number = getRandomNumber(1, 100);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  run(rule, getRound);
};
