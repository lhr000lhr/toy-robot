// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question(`your name?`, (name) => {
//   console.log(`your name is ${name}!`);
//   readline.close();
// });
// import { createSlice, configureStore } from '@reduxjs/toolkit'

// PLACE X,Y,F
// MOVE
// LEFT
// RIGHT
// REPORT

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
    report: (state) => {
      const { direction, x, y } = state;
      console.log(x, y, direction);
    },
  },
});

// const { place, left, right, move, report } = robot.actions;

module.exports = robot;

const store = configureStore({
  reducer: robot.reducer,
});

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(
//   place({
//     direction: "SOUTH",
//     x: 0,
//     y: 0,
//   })
// );
// store.dispatch(move());
// store.dispatch(report());

// store.dispatch(left());
// store.dispatch(report());

// store.dispatch(move());
// store.dispatch(report());

// store.dispatch(left());
// store.dispatch(report());

// store.dispatch(move());
// store.dispatch(report());
