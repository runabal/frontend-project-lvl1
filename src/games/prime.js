import readlineSync from 'readline-sync';

const prime = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no". ');
  let roundCount = 0;
  do {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    let isPrime = 0;
    for (let j = 2; j < number; j += 1) {
      if (number % j === 0) {
        isPrime += 1;
      }
    }
    if (isPrime > 0 && userAnswer === 'no') {
      console.log('Correct!');
      roundCount += 1;
    }
    if (isPrime === 0 && userAnswer === 'yes') {
      console.log('Correct!');
      roundCount += 1;
    }
    if (isPrime > 0 && userAnswer === 'yes') {
      console.log(
        `'yes' is wrong answer ;(.Correct answer was 'no'. Let's try again, ${userName}!`,
      );
      break;
    }
    if (isPrime === 0 && userAnswer === 'no') {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`,
      );
      break;
    }
  } while (roundCount < 3);
  if (roundCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default prime;
