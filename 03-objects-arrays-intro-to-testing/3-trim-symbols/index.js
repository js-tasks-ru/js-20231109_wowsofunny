/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let stringArr = [...string];
  let resultString = '';

  if (size) {
    let currentIndex = 0;
    let startIndex = 0;
    for (const item of stringArr) {
      if (currentIndex !== 0 && item !== stringArr[currentIndex - 1] || currentIndex === (stringArr.length - 1)) {
        if (currentIndex === (stringArr.length - 1) && item !== stringArr[currentIndex - 1]) {
          resultString = resultString + stringArr.slice(startIndex, currentIndex).slice(0, size).join('');
          startIndex = currentIndex;
          resultString = resultString + stringArr.slice(startIndex).slice(0, size).join('');
          return resultString;
        } else {
          resultString = resultString + stringArr.slice(startIndex, currentIndex).slice(0, size).join('');
        }
        startIndex = currentIndex;
      }
      currentIndex++;
    }
  }

  if (size === 0) {
    return '';
  }

  if (!size) {
    return string;
  }

  return resultString;
}
