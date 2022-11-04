import run from '../index.js';
import getRandomNumber from '../utils.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getRound = () => {
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${randomOperator} ${number2}`;
  const answer = String(calculate(number1, number2, randomOperator));
  return [question, answer];
};

export default () => {
  run(rule, getRound);
};
