import run from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const rule = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 100;
const minLength = 5;
const maxLength = 10;
const minStep = 2;
const maxStep = 10;

const buildProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getRound = () => {
  const start = getRandomNumber(minRange, maxRange);
  const length = getRandomNumber(minLength, maxLength);
  const step = getRandomNumber(minStep, maxStep);
  const progression = buildProgression(start, step, length);

  const hiddenIndex = getRandomIndex(progression);
  const answer = String(progression[hiddenIndex]);

  progression.splice(hiddenIndex, 1, '..');
  return [progression.join(' '), answer];
};

export default () => {
  run(rule, getRound);
};
