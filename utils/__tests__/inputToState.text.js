const inputToState = require("../inputToState");

test("convert Input to initial state", () => {
  expect(inputToState("0,0,NORTH")).toEqual({
    direction: "NORTH",
    x: 0,
    y: 0,
  });

  expect(inputToState("0,0,SOUTH")).toEqual({
    direction: "SOUTH",
    x: 0,
    y: 0,
  });
});
