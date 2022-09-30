import runround from '../index.js';
import getRandom from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers . ';

const isGcd = (number1, number2) => {
  if (number1 % number1 !== 0 || number2 % number1 !== 0) {
    return isGcd(number2, number1 % number2);
  }
  return number1;
};

const round = () => {
  const num1 = getRandom(1, 100);
  const num2 = getRandom(1, 100);
  const question = `${num1} ${num2}`;
  const trueAnswer = `${isGcd(num1, num2)}`;
  return [question, trueAnswer];
};
export default () => runround(rule, round);
