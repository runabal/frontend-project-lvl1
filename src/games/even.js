import getRandom from '../utils.js';
import index from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const userData = () => {
  const number = getRandom(1, 100);
  const question = `${number}`;
  const truAnswer = isEven(number) ? 'yes' : 'no';
  return [question, truAnswer];
};
const even = () => index(gameRules, userData);

export default even;
