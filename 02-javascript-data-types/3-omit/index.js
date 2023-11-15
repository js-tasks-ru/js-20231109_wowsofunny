/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let newObj = obj ? Object.assign({}, obj) : {};

  if (fields.length) {
    for (let field of fields) {
      if (newObj[field]) {
        delete newObj[field];
      }
    }
  } else {
    return obj;
  }

  return newObj;
};
