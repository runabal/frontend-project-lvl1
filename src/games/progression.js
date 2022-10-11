import run from '../index.js';
import getRandom from '../utils.js';

const rule = 'What number is missing in the progression?';

const runProgression = (getNumber, dependence) => {
  const result = [];
  let arrResult = getNumber;
  for (let j = 0; j < 10; j += 1) {
    arrResult += dependence;
    result.push(arrResult);
  }
  return result;
};

const getRound = () => {
  const startNumber = getRandom(1, 20);
  const dependence = getRandom(1, 10);
  const quantity = getRandom(2, 10);
  const hiddenNumber = getRandom(0, quantity);
  const arProgression = runProgression(startNumber, dependence);
  const expectedAnswer = `${arProgression[hiddenNumber]}`;
  arProgression[hiddenNumber] = '..';
  const question = arProgression.join(' ');
  return [question, expectedAnswer];
};

export default () => run(rule, getRound);
