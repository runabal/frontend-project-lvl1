import index from '../index.js';
import getRandom from '../utils.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answet "no".';

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

const userDate = () => {
  const number = getRandom(1, 100);
  const question = `${number}`;
  const trueAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, trueAnswer];
};
const prime = () => index(gameRules, userDate);
export default prime;
