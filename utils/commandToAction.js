const { reducer, actions } = require("../index");
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
      throw "Command not found!";
      break;
  }

  return action;
};

module.exports = commandToAction;
