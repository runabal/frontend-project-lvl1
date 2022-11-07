import { getRandomNumber } from "../utils.js";
import run from "../index.js";

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 100;

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const number = getRandomNumber(min, max);
  const question = String(number);
  const answer = isEven(number) ? "yes" : "no";
  return [question, answer];
};

export default () => {
  run(rule, getRound);
};
