/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newObj = obj ? {...obj} : {};

  if (fields.length) {
    for (const field of fields) {
      if (newObj[field]) {
        delete newObj[field];
      }
    }
  }

  return newObj;
};
