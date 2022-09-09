import readlineSync from 'readline-sync';

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers. ');
  let roundCount = 0;
  do {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${num1} ${num2}`);
    let result = num1;
    while (num1 % result !== 0 || num2 % result !== 0) {
      result -= 1;
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
export default gcd;
