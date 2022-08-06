import readlineSync from 'readline-sync';

const even = () => {
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  do {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
      i += 1;
    } else if (number % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(
        "'yes' is wrong answer ;(. Correct answer was 'no'. "
          + `Let's try again, ${userName}!`,
      );
      break;
    }
  } while (i < 3);
  if (i === 3) {
    console.log(`Congratulation, ${userName}!`);
  }
};
export default even;
