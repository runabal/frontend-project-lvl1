import readlineSync from "readline-sync";

const calc = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log("What is the result of expresssion?");
  let i = 0;
  do {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const math = ["+", "-", "*"];
    const mathAction = math[Math.floor(Math.random() * 3)];
    console.log("Question: ");
    let result = 0;
    switch (mathAction) {
      case "+":
        result = num1 + num2;
        console.log(num1, "+", num2);
        break;
      case "-":
        result = num1 - num2;
        console.log(num1, "-", num2);
        break;
      case "*":
        result = num1 * num2;
        console.log(num1, "*", num2);
        break;
      default:
        result = 0;
    }
    const userAnswer = readlineSync.question("Your answer: ");
    if (result.toString() === userAnswer) {
      console.log("Correct!");
      i += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${result} Let's try again, ${userName}!`
      );
      break;
    }
  } while (i < 3);
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default calc;
