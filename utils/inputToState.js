const inputToState = (input) => {
  const [x, y, direction] = input.split(",");

  return {
    x: parseInt(x),
    y: parseInt(y),
    direction: direction,
  };
};
module.exports = inputToState;
