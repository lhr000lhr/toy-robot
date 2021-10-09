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

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    direction: "SOUTH",
    x: 0,
    y: 0,
  },
  reducers: {
    report: (state) => {
      const { direction, x, y } = state;
      console.log(x, y, direction);
    },
    place: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      const { direction, x, y } = payload;
      state.direction = direction;
      state.x = x;
      state.y = y;
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
          state.y = Math.min(state.y + 1, 4);
          break;
        case "SOUTH":
          state.y = Math.max(state.y - 1, 0);
          break;
        case "WEST":
          state.x = Math.max(state.x - 1, 0);
          break;
        case "EAST":
          state.x = Math.min(state.x + 1, 4);
          break;
        default:
          break;
      }
    },
  },
});

const { place, left, right, move, report } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(
  place({
    direction: "SOUTH",
    x: "0",
    y: "0",
  })
);
store.dispatch(move());
store.dispatch(report());

store.dispatch(left());
store.dispatch(report());

store.dispatch(move());
store.dispatch(report());



store.dispatch(left());
store.dispatch(report());

store.dispatch(move());
store.dispatch(report());

