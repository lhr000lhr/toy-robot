const move = (state) => {
  const { direction, x, y } = state;
  switch (direction) {
    case "NORTH":
      state.y = Math.min(y + 1, 4);
      break;
    case "SOUTH":
      state.y = Math.max(y - 1, 0);
      break;
    case "WEST":
      state.x = Math.max(x - 1, 0);
      break;
    case "EAST":
      state.x = Math.min(x + 1, 4);
      break;
    default:
      break;
  }
};

module.exports = move;
