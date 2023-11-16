/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const sortArr = arr.concat();

  if (param === 'desc') {
    return sortArr.sort((a, b) => b.localeCompare(a, ['ru', 'en'], { caseFirst: 'upper', sensitivity: 'case' }));
  }

  return sortArr.sort((a, b) => a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper', sensitivity: 'case' }));
}
