import readlineSync from 'readline-sync';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of expresssion?');
  let roundCount = 0;
  do {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operation = ['+', '-', '*'];
    const mathActionChoice = operation[Math.floor(Math.random() * 3)];
    console.log(`Question: ${num1} ${mathActionChoice} ${num2}`);
    let result = 0;
    switch (mathActionChoice) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = 0;
    }
    const userAnswer = readlineSync.question('Your answer: ');
    if (result.toString() === userAnswer) {
      console.log('Correct!');
      roundCount += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${result} Let's try again, ${userName}!`,
      );
      break;
    }
  } while (roundCount < 3);
  if (roundCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default calc;