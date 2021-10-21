// PLACE X,Y,F
// MOVE
// LEFT
// RIGHT
// REPORT
const chalk = require("chalk");
const { createSlice, configureStore } = require("@reduxjs/toolkit");
const _ = require("lodash");
const obs = require("./obs");
const reducers = require("./reducers");

const calculator = require("./utils/calculator");

const robot = createSlice({
  name: "robot",
  initialState: {
    obs: [],
  },
  reducers,
});

const logger = (store) => (next) => (action) => {
  const state = store.getState();
  if (
    state.x === undefined &&
    state.y === undefined &&
    action.type !== robot.actions.place.type
  ) {
    throw "must " + chalk.red("PLACE") + " robot first";
  }

  if (action.type === robot.actions.report.type) {
    const { direction, x, y } = state;
    console.log(`${x},${y},${direction}`);
  }

  if (action.type === robot.actions.placeObs.type) {
    const { payload } = action;
    const { x, y } = state;
    console.log({ x, y });
    if (_.isEqual({ x, y }, { x: payload.x, y: payload.y })) {
      throw "should not " + chalk.red("PLACE") + " on the robot";
    }
  }

  if (action.type === robot.actions.destination.type) {
    const { payload } = action;
    const { x, y } = payload;

    calculator(state, { x, y });
  }

  let result = next(action);

  console.log({ state });
  return result;
};

const store = configureStore({
  reducer: robot.reducer,
  middleware: [logger],
});

module.exports = { robot, store, obs };
