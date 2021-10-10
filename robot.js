// PLACE X,Y,F
// MOVE
// LEFT
// RIGHT
// REPORT
const chalk = require("chalk");
const { createSlice, configureStore } = require("@reduxjs/toolkit");

const reducers = require("./reducers");

const robot = createSlice({
  name: "robot",
  initialState: null,
  reducers,
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
