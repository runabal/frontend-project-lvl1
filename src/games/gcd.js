import run from '../index.js';
import getRandom from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers . ';

const isGcd = (number1, number2) => {
  if (number1 % number1 !== 0 || number2 % number1 !== 0) {
    return isGcd(number2, number1 % number2);
  }
  return number1;
};

const getRound = () => {
  const firstNumber = getRandom(1, 100);
  const secondNumber = getRandom(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const trueAnswer = `${isGcd(firstNumber, secondNumber)}`;
  return [question, trueAnswer];
};
export default () => run(rule, getRound);
