const _ = require("lodash");

const calculator = (state, destination) => {
  const { x, y, obs } = state;

  const { x: desX, y: desY } = destination;

  const start = [x, y];
  const end = [desX, desY];

  const parents = findPath(start, end, obs);
  printPath(parents, { x: desX, y: desY });
};

const safeNeighbor = (obs, x, y) => {
  if (x < 0 || x >= 5) return false;
  if (y < 0 || y >= 5) return false;
  if (_.find(obs, { x, y })) {
    return false;
  }

  return true;
};

const exploreLocation = (obs, location) => {
  let x = location.x;
  let y = location.y;
  let allNeighbors = [];
  //left
  if (safeNeighbor(obs, x, y - 1)) allNeighbors.push({ x, y: y - 1 });
  //right
  if (safeNeighbor(obs, x, y + 1)) allNeighbors.push({ x, y: y + 1 });
  //top
  if (safeNeighbor(obs, x - 1, y)) allNeighbors.push({ x: x - 1, y });
  //bottom
  if (safeNeighbor(obs, x + 1, y)) allNeighbors.push({ x: x + 1, y });
  return allNeighbors;
};

const findPath = (start, end, obs) => {
  const location = {
    x: start[0],
    y: start[1],
  };

  const parents = {};

  const queue = [];
  queue.push(location);

  const visited = [];
  while (queue.length) {
    const currentLocation = queue.shift();
    if (currentLocation.x == end[0] && currentLocation.y == end[1])
      return parents;

    visited.push({ x: currentLocation.x, y: currentLocation.y });

    const neighbors = exploreLocation(obs, currentLocation);
    for (neighbor of neighbors) {
      if (!_.find(visited, { x: neighbor.x, y: neighbor.y })) {
        queue.push(neighbor);
        parents[`${neighbor.x}${neighbor.y}`] = currentLocation;
      }
    }
  }

  throw "cannot reach the destination";
};

const printPath = (parents, path) => {
  const paths = [path];
  while (true) {
    const { x, y } = path;
    const parent = parents[`${x}${y}`];
    if (parent === undefined) break;
    paths.push(parent);
    path = { x: parent.x, y: parent.y };
  }
  console.log(paths);
};

module.exports = calculator;
