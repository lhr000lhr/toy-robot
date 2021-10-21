const place = require("./place");
const placeObs = require("./placeObs");
const left = require("./left");
const right = require("./right");
const move = require("./move");
const report = require("./report");
const destination = require("./destination");

const reducers = {
  place,
  placeObs,
  left,
  right,
  move,
  report,
  destination,
};

module.exports = reducers;
