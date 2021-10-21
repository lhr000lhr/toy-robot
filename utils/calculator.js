const _ = require("lodash");

const parents = {};

const calculator = (state, destination) => {
  const { x, y, obs } = state;

  const { x: desX, y: desY } = destination;

  let start = [x, y];
  let end = [desX, desY];

  const path = findPath(start, end, obs);
  printPath(path);
};

const safeNeighbor = function (obs, r, c) {
  if (r < 0 || r >= 4) return false;
  if (c < 0 || c >= 4) return false;
  if (_.find(obs, { r, c })) {
    return false;
  }

  return true;
};

const exploreLocation = function (obs, location) {
  let r = location.r;
  let c = location.c;
  let allNeighbors = [];
  //left
  if (safeNeighbor(obs, r, c - 1)) allNeighbors.push({ r: r, c: c - 1 });
  //right
  if (safeNeighbor(obs, r, c + 1)) allNeighbors.push({ r: r, c: c + 1 });
  //top
  if (safeNeighbor(obs, r - 1, c)) allNeighbors.push({ r: r - 1, c: c });
  //bottom
  if (safeNeighbor(obs, r + 1, c)) allNeighbors.push({ r: r + 1, c: c });
  return allNeighbors;
};

const findPath = function (start, end, obs) {
  var location = {
    r: start[0],
    c: start[1],
  };
  var queue = [];
  queue.push(location);

  const visited = [];
  while (queue.length) {
    var currentLocation = queue.shift();
    const { r, c } = currentLocation;
    if (currentLocation.r == end[0] && currentLocation.c == end[1])
      return currentLocation;

    visited.push({ r: currentLocation.r, c: currentLocation.c });

    // grid[currentLocation.r][currentLocation.c].state = "visited";
    var neighbors = exploreLocation(obs, currentLocation);
    for (neighbor of neighbors) {
      if (_.find(visited, { r, c })) {
        queue.push(neighbor);
        parents[`${r}${c}`] = currentLocation;
      }
    }
  }
  return false;
};

const printPath = function (path) {
  let paths = [path];
  while (true) {
    let r = path.r;
    let c = path.c;
    let parent = parents[`${r}${c}`];
    if (parent == undefined) break;
    paths.push(parent);
    path = { r: parent.r, c: parent.c };
  }
  console.log(paths);
};

module.exports = calculator;
