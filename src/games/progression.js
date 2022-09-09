import readlineSync from 'readline-sync';

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is mission in the progression?');
  let roundCount = 0;
  do {
    const startnumber = Math.floor(Math.random() * 20) + 1;
    const quantity = Math.floor(Math.random() * 5) + 5;
    const hiddenNumber = Math.floor(Math.random() * (startnumber - 1));
    const result = [];
    let arrresult = 0;
    for (let j = 0; j <= quantity; j += 1) {
      arrresult += startnumber;
      result.push(arrresult);
    }
    const endresult = result.slice();
    endresult.splice(hiddenNumber, 1, '..');
    console.log(`Question: ${endresult.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const resulthiddenNumber = result[hiddenNumber];
    if (String(resulthiddenNumber) === userAnswer) {
      console.log('Correct!');
      roundCount += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${resulthiddenNumber}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  } while (roundCount < 3);
  if (roundCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default progression;
