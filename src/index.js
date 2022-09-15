import readlineSync from 'readline-sync';

const index = (gamerules, userData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ${userName}!');
  console.log(gamerules);
  let roundCount = 0;
  do {
    const [question, correctAnswer] = userData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      roundCount += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (roundCount < 3);
  if (roundCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default index;
