function countZeroes(arr) {
  if (arr[0] === 0)
    return arr.length;
  
  if (arr[arr.length - 1] === 1)
    return 0;
  
  return arr.length - firstZeroIdx(arr);
}

function firstZeroIdx(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2)
    let middleVal = arr[middleIdx];
    if (middleVal === 0 && arr[middleIdx - 1] === 1) {
      return middleIdx;
    } else if (middleVal === 1) {
      leftIdx = middleIdx + 1;
    } else {
      rightIdx = middleIdx -1;
    }
  }
}

module.exports = countZeroes

