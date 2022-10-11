import run from '../index.js';
import getRandom from '../utils.js';

const rule = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const number = getRandom(1, 100);
  const question = `${number}`;
  const trueAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, trueAnswer];
};
export default () => run(rule, getRound);
