import runround from '../index.js';
import getRandom from '../utils.js';

const rule = 'What number is missing in the progression?';

const runprogression = (getNumber, dependence) => {
  const result = [];
  let arrresult = getNumber;
  for (let j = 0; j < 10; j += 1) {
    arrresult += dependence;
    result.push(arrresult);
  }
  return result;
};

const round = () => {
  const startnumber = getRandom(1, 20);
  const dependence = getRandom(1, 10);
  const quantity = getRandom(2, 10);
  const hiddenNumber = getRandom(0, quantity);
  const arprogression = runprogression(startnumber, dependence);
  const trueAnswer = `${arprogression[hiddenNumber]}`;
  arprogression[hiddenNumber] = '..';
  const question = arprogression.join(' ');
  return [question, trueAnswer];
};

export default () => runround(rule, round);
