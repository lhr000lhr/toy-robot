const chalk = require("chalk");

const inputToState = require("../inputToState");

describe("convert Input to initial state", () => {
  test("should convert correctly", () => {
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

  test("should throw exception when receiving illegal parameter", () => {
    const parameters = [
      "0,a,SOUTH",
      "0,7,SOUTH",
      "0,,SOUTH",
      "0,:,SOdUTH",
      "0,0,0",
      null,
      undefined,
      "----"
    ];
    parameters.forEach((parameter) => {
      expect(() => {
        inputToState(parameter);
      }).toThrowError(`input parameter ${chalk.red(parameter)} error`);
    });
  });
});
