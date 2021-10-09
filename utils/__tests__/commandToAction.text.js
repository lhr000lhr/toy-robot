const commandToAction = require("../commandToAction");

test("convert command to action", () => {
  expect(commandToAction("PLACE 0,1,NORTH")).toEqual({
    payload: { direction: "NORTH", x: 0, y: 1 },
    type: "robot/place",
  });

  expect(commandToAction("MOVE")).toEqual({
    payload: undefined,
    type: "robot/move",
  });

  expect(commandToAction("LEFT")).toEqual({
    payload: undefined,
    type: "robot/left",
  });

  expect(commandToAction("RIGHT")).toEqual({
    payload: undefined,
    type: "robot/right",
  });

  expect(commandToAction("REPORT")).toEqual({
    payload: undefined,
    type: "robot/report",
  });

  expect(() => {
    commandToAction("RE1PORT");
  }).toThrowError("Command not found!");
});
