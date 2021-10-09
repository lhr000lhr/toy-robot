const inputToState = (input) => {
  const [x, y, direction] = input.split(",");

  return {
    x: x,
    y: y,
    direction: direction,
  };
};
module.exports = inputToState;
