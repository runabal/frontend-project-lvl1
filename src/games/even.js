import getRandom from '../utils.js';
import runround from '../index.js';

const rule = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const round = () => {
  const number = getRandom(1, 100);
  const question = `${number}`;
  const truAnswer = isEven(number) ? 'yes' : 'no';
  return [question, truAnswer];
};
const runeven = () => runround(rule, round);

export default runeven;
