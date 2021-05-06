export const findNextTaskState = (state, states) => {
  if (states.length === 0) {
    return null;
  }

  if (states.length === 1) {
    return states[0];
  }

  const foundTaskStateIdx = states.findIndex(
    (currState) => currState.id === state.id
  );

  return states[foundTaskStateIdx + 1] ?? states[0];
};
