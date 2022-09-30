import runround from '../index.js';
import getRandom from '../utils.js';

const rule = 'What is the result of the expression?';

const isCalc = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const round = () => {
  const operators = ['+', '-', '*'];
  const RandomOperator = operators[getRandom(0, 2)];
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const question = `${number1} ${RandomOperator} ${number2}`;
  const truAnswer = `${isCalc(number1, RandomOperator, number2)}`;
  return [question, truAnswer];
};

const runcalc = () => runround(rule, round);

export default runcalc;
