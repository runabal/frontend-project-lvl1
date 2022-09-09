import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let roundCount = 0;
  do {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
      roundCount += 1;
    } else if (number % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
      roundCount += 1;
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${userName}!`);
      break;
    }
  } while (roundCount < 3);
  if (roundCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default even;
