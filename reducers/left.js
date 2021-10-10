const left = (state) => {
  const { direction } = state;
  switch (direction) {
    case "NORTH":
      state.direction = "WEST";
      break;
    case "SOUTH":
      state.direction = "EAST";
      break;
    case "WEST":
      state.direction = "SOUTH";
      break;
    case "EAST":
      state.direction = "NORTH";
      break;
    default:
      break;
  }
};

module.exports = left;
