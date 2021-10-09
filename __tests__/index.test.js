const { reducer, actions } = require("../index");

const { place, left, right, move, report } = actions;

describe("Robot action tests", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(null);
  });

  test("should move initial position", () => {
    expect(
      reducer(undefined, place({ direction: "SOUTH", x: 0, y: 0 }))
    ).toEqual({ direction: "SOUTH", x: 0, y: 0 });
  });

  test("should move to correct position", () => {
    expect(reducer({ direction: "NORTH", x: 0, y: 0 }, move())).toEqual({
      direction: "NORTH",
      x: 0,
      y: 1,
    });
  });
});
