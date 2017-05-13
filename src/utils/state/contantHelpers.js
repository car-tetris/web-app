/**
 * Create a constants with api state types.
 *
 * @param {string} base
 * @returns {object}
 */
export const createRequestTypes = (base) => {
  const res = {};
  ["REQUEST", "SUCCESS", "ERROR"].forEach(type => res[type] = `${base}_${type}`);
  return res;
};
