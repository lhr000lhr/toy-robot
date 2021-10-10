const place = (_, { payload }) => {
  const { direction, x, y } = payload;
  return { direction, x, y };
};

module.exports = place