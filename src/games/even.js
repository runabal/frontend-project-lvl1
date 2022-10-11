import getRandom from '../utils.js';
import run from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const getRound = () => {
  const number = getRandom(1, 100);
  const question = `${number}`;
  const truAnswer = isEven(number) ? 'yes' : 'no';
  return [question, truAnswer];
};
export default () => run(rule, getRound);
