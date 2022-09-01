import readlineSync from "readline-sync";

const progression = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log("What number is mission in the progression?");
  let i = 0;
  do {
    const startnumber = Math.floor(Math.random() * 20) + 1;
    const quantity = Math.floor(Math.random() * 10) + 3;
    const hiddenNumber = Math.floor(Math.random() * (startnumber - 1)) + 1;
    const result = [];
    let arrresult = 0;
    for (let j = 0; j < quantity; j += 1) {
      arrresult += startnumber;
      result.push(arrresult);
    }
    const endresult = result.slice();
    endresult.splice(hiddenNumber, 1, "..");
    console.log(endresult.join(" "));
    const userAnswer = readlineSync.question("Your answer: ");
    if (result[hiddenNumber].toString() === userAnswer) {
      console.log("Correct!");
      i += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${result[hiddenNumber]}! Let's try again, ${userName}`
      );
      break;
    }
  } while (i < 3);
  if (i === 3) {
    console.log(`Congratulation, ${userName}!`);
  }
};
export default progression;