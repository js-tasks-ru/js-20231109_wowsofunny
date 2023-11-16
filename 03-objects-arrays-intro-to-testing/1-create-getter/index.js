/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const propsArr = path.split('.');

  return (obj) => {
    let result = {...obj};

    for (const prop of propsArr) {
      if (result[prop]) {
        result = result[prop];
      } else {
        return undefined;
      }
    }

    return result;
  };
}
