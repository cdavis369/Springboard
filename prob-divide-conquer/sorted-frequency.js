function sortedFrequency(arr, val) {
  let idx = binarySearch(arr, val);
  if (idx === -1)
    return idx;
  let count = 1;
  for (let left = idx - 1; left >= 0 && arr[left] === val; left--)
    count++;
  for (let right = idx + 1; right < arr.length && arr[right] === val; right++)
    count++;
  return count;
}

function binarySearch(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    let middleVal = arr[middleIdx];
    if (middleVal < val) 
      leftIdx = middleIdx + 1;
    else if (middleVal > val)
      rightIdx = middleIdx - 1;
    else 
      return middleIdx;
  }
  return -1;
}

module.exports = sortedFrequency

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1