/**
 * Get an typical action object.
 * Source {@link https://github.com/yelouafi/redux-saga/blob/master/examples/real-world/actions/index.js#L26 github.com}
 *
 * @param {string} type - action type (constants)
 * @param {object} [obj={}] - e.g. response of a request
 * @returns {object} Returns an object like: {type: 'LOGIN', data: { ... }}
 */
export const action = (type, obj = {}) => ({ type, ...obj });
