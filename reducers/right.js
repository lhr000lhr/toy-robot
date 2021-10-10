const right = (state) => {
  const { direction } = state;
  switch (direction) {
    case "NORTH":
      state.direction = "EAST";
      break;
    case "SOUTH":
      state.direction = "WEST";
      break;
    case "WEST":
      state.direction = "NORTH";
      break;
    case "EAST":
      state.direction = "SOUTH";
      break;
    default:
      break;
  }
};

module.exports = right;
