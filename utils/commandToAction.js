const chalk = require("chalk");

const {
  robot: { actions },
} = require("../robot");
const {
  inputToState,
  inputToObsState,
  inputDestinationToState,
} = require("./inputToState");

const { place, left, right, move, report, placeObs, destination } = actions;

const commandToAction = (input) => {
  const [commandName, param] = input.split(" ");
  // PLACE X,Y,F
  // MOVE
  // LEFT
  // RIGHT
  // REPORT
  let action = null;
  switch (commandName) {
    case "PLACE":
      const initialState = inputToState(param);
      action = place(initialState);
      break;
    case "PLACEOBS":
      const obs = inputToObsState(param);
      action = placeObs(obs);
      break;
    case "DESTINATION":
      const des = inputDestinationToState(param);
      action = destination(des);
      break;
    case "MOVE":
      action = move();
      break;
    case "LEFT":
      action = left();
      break;
    case "RIGHT":
      action = right();
      break;
    case "REPORT":
      action = report();
      break;

    default:
      throw `Command '${chalk.red(input)}' not found!`;
  }

  return action;
};

module.exports = commandToAction;
