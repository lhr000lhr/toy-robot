const chalk = require("chalk");

const pattern = /-?[0-4],-?[0-4],\b(NORTH|SOUTH|EAST|WEST)\b/;

const inputToState = (input) => {
  if (!pattern.test(input)) {
    throw `input parameter ${chalk.red(input)} error`
  }

  const [x, y, direction] = input.split(",");

  return {
    x: parseInt(x),
    y: parseInt(y),
    direction: direction,
  };
};
module.exports = inputToState;
