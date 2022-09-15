import readlineSync from 'readline-sync';
import index from '../index.js'
import getRandom from '../utils.js'

const gameRules = 'What is the result of the expression?';

const calcAnswer = (num1, operator, num2) => {

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

    const userData = () => {
    const operators = ['+', '-', '*'];
    const isRandomOperator = operators[Math.floor(Math.random()*3)];
    const number1 = getRandom(1, 100);
    const number2 = getRandom(1, 100);
    const question = `${number1} ${isRandomOperator} ${number2}`
    const truAnswer = `${calcAnswer(number1, isRandomOperator, number2)}`;
    return [question, truAnswer];
};

const calc =() => index(gameRules, userData);

export default calc;
