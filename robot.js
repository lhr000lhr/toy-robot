// PLACE X,Y,F
// MOVE
// LEFT
// RIGHT
// REPORT
const chalk = require("chalk");
const { createSlice, configureStore } = require("@reduxjs/toolkit");

const robot = createSlice({
  name: "robot",
  initialState: null,
  reducers: {
    place: (_, { payload }) => {
      const { direction, x, y } = payload;
      return { direction, x, y };
    },
    left: (state) => {
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
    },
    right: (state) => {
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
    },
    move: (state) => {
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
    },
    report: (state) => {},
  },
});

const logger = (store) => (next) => (action) => {
  const state = store.getState();
  if (state === null && action.type !== robot.actions.place.type) {
    throw "must " + chalk.red("PLACE") + " robot first";
  }

  if (action.type === robot.actions.report.type) {
    const { direction, x, y } = state;
    console.log(`${x},${y},${direction}`);
  }
  let result = next(action);
  return result;
};

const store = configureStore({
  reducer: robot.reducer,
  middleware: [logger],
});

module.exports = { robot, store };
