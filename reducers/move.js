const _ = require("lodash");
// const obs = require("../obs");

const move = (state) => {
  const { direction, x, y, obs } = state;

  const newState = { ...state };
  switch (direction) {
    case "NORTH":
      newState.y = Math.min(y + 1, 4);
      break;
    case "SOUTH":
      newState.y = Math.max(y - 1, 0);
      break;
    case "WEST":
      newState.x = Math.max(x - 1, 0);
      break;
    case "EAST":
      newState.x = Math.min(x + 1, 4);
      break;
    default:
      break;
  }

  if (_.find(obs, { x: newState.x, y: newState.y })) {
    return { ...state };
  }
  return newState;
};

module.exports = move;
