import index from '../index.js';
import getRandom from '../utils.js';

const gameRules = 'Find the greatest common divisor of given numbers . ';

const gcd = (number1, number2) => {
  if (number1 % number1 !== 0 || number2 % number1 !== 0) {
    return gcd(number2, number1 % number2);
  }
  return number1;
};

const userDate = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${num2}`;
  const trueAnswer = `${gcd(num1, num2)}`;
  return [question, trueAnswer];
};
export default () => index(gameRules, userDate);
