const readline = require("readline");

const { store } = require("./robot");
const commandToAction = require("./utils/commandToAction");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recursiveAsyncReadLine = () => {
  rl.question("Please input command: ", function (answer) {
    if (answer == "exit") {
      //we need some base case, for recursion
      return rl.close(); //closing RL and returning from function.
    }
    // log('Got it! Your answer was: "', answer, '"');
    try {
      store.dispatch(commandToAction(answer));
    } catch (error) {
      console.error(error);
    }
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow
