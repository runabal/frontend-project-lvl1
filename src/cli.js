import readlineSync from "readline-sync";

const hello = () => {
  const userName = readlineSync.question("May I have you name? ");
  const result = `Hello, ${userName}!`;
  return result;
};
export default hello;
