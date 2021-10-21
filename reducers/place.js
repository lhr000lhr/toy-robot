const place = (state, { payload }) => {
  const { direction, x, y } = payload;
  return { ...state, direction, x, y };
};

module.exports = place;
