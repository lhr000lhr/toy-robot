const placeObs = (state, { payload }) => {
  const { x, y } = payload;
  const { obs } = state;
  obs.push({ x, y });
//   console.log({ obs });
//   return { ...state, obs };
};

module.exports = placeObs;
