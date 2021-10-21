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

const placeRobotCheck = (store) => (next) => (action) => {
  const state = store.getState();
  if (
    state.x === undefined &&
    state.y === undefined &&
    action.type !== robot.actions.place.type
  ) {
    throw "must " + chalk.red("PLACE") + " robot first";
  }

  const result = next(action);

  return result;
};

const obstacleCheck = (store) => (next) => (action) => {
  const state = store.getState();
  if (action.type === robot.actions.placeObs.type) {
    const { payload } = action;
    const { x, y } = state;
    if (_.isEqual({ x, y }, { x: payload.x, y: payload.y })) {
      throw "should not " + chalk.red("PLACE") + " on the robot";
    }
  }

  const result = next(action);

  return result;
};

const reportLocation = (store) => (next) => (action) => {
  const state = store.getState();
  if (action.type === robot.actions.report.type) {
    const { direction, x, y } = state;
    console.log(`${x},${y},${direction}`);
  }
  const result = next(action);

  return result;
};

const findPath = (store) => (next) => (action) => {
  let result = next(action);

  if (action.type === robot.actions.destination.type) {
    const { payload } = action;
    const { x, y } = payload;
    calculator(state, { x, y });
  }

  return result;
};

const store = configureStore({
  reducer: robot.reducer,
  middleware: [placeRobotCheck, reportLocation, obstacleCheck, findPath],
});

store.subscribe(() => console.log("State after dispatch: ", store.getState()));
module.exports = { robot, store, obs };
