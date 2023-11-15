/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortArr = arr.concat();

  if (param === 'asc') {
    return sortArr.sort((a, b) => a.localeCompare(b, undefined, { caseFirst: 'upper', sensitivity: 'case' }));
  }

  if (param === 'desc') {
    return sortArr.sort((a, b) => b.localeCompare(a, undefined, { caseFirst: 'upper', sensitivity: 'case' }));
  }
}
