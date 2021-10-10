const {
  robot: { actions },
} = require("../robot");
const inputToState = require("./inputToState");

const { place, left, right, move, report } = actions;

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
      throw `Command '${input}' not found!`;
  }

  return action;
};

module.exports = commandToAction;
