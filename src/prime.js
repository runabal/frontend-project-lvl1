import readlineSync from "readline-sync";

const prime = () => {
  const userName = readlineSync.question("May I have you name? ");
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no". ');
  let i = 0;
  do {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ");
    let result = 0;
    for (let j = 2; j < number; j += 1) {
      if (number % j === 0) {
        result += 1;
      }
    }
    if (result > 0 && userAnswer === "no") {
      console.log("Correct!");
      i += 1;
    }
    if (result === 0 && userAnswer === "yes") {
      console.log("Correct!");
      i += 1;
    }
    if (result > 0 && userAnswer === "yes") {
      console.log(
        `'yes' is wrong answer ;(.Correct answer was 'no'. Let's try again, ${userName}!`
      );
      break;
    }
    if (result === 0 && userAnswer === "no") {
      console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${userName}!`
      );
      break;
    }
  } while (i < 3);
  if (i === 3) {
    console.log(`Congratulation, ${userName}!`);
  }
};
export default prime;
