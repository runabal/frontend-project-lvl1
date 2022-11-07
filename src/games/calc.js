import run from "../index.js";
import { getRandomNumber } from "../utils.js";

const rule = "What is the result of the expression?";
const operators = ["+", "-", "*"];
const min = 1;
const max = 100;

const calculate = (x, y, operator) => {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getRound = () => {
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, number2, operator));
  return [question, answer];
};

export default () => {
  run(rule, getRound);
};
