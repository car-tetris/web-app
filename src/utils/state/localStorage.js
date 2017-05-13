
/**
 * Get state from localStorage.
 *
 * @returns {object|undefined}
 */
export const loadState = () => {
  let state = null
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    state = JSON.parse(serializedState)
  }catch(err) {
    return undefined
  }

  // edit loading, loaded, error values to default
  Object.keys(state).forEach((key) => {

    if(state[key].isFetching === 'boolean') {
      state[key].isFetching = false
      state[key].error = null

    }else{

      Object.keys(state[key]).forEach((subKey) => {
        if(state[key][subKey] && typeof state[key][subKey].isFetching === 'boolean') {
          state[key][subKey].isFetching = false;
          state[key][subKey].error = null;
        }
      })

    }

  });

  return {fe: state};
}

/**
 * Save state to the localStorage.
 *
 * @param {object} state
 * @param {array} whitelist
 */
export const saveState = (state, whitelist=[]) => {

  let newState = {};
  Object.keys(state.fe).forEach((key) => {
    if(whitelist.indexOf(key) !== -1) {
      newState[key] = state.fe[key];
      if(newState[key].error) newState[key].error = null;
      if(newState[key].isFetching) newState[key].isFetching = false;
    }
  })

  try {
    const serializedState = JSON.stringify(newState);
    localStorage.setItem('state', serializedState);
  }catch(err) {
    // Ignore write errors.
  }
}

/**
 * Remove state from localStorage.
 */
export const removeState = () => {
  try {
    localStorage.removeItem('state')
  }catch(err) {
    // Ignore write errors.
  }
}
