/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (obj && Object.keys(obj).length) {
    const newObj = { ...obj };
    const objEntriesArr = Object.entries(newObj);

    for (const item of objEntriesArr) {
      let temp = item[0];

      item[0] = item[1];
      item[1] = temp;
    }

    return Object.fromEntries(objEntriesArr);
  } else if (obj && !Object.keys(obj).length) {
    return {};
  } else {
    return undefined;
  }
}
