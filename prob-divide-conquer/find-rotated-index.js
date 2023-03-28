function findRotatedIndex(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    if (arr[middleIdx] === val)
      return middleIdx
    if (arr[leftIdx] <= arr[middleIdx]) {
      if (val >= arr[leftIdx] && val <= arr[middleIdx])
        rightIdx = middleIdx - 1;
      else
        leftIdx = middleIdx + 1;
    }
    else if (val >= arr[middleIdx] && val <= arr[rightIdx])
      leftIdx = middleIdx + 1;
    else 
      rightIdx = middleIdx - 1;
  }
  return -1;
}

// [6, 7, 8, 9, 1, 2, 3, 4], 8
//  L        M           R      1st pass
//  L  M  R                     2nd pass
//        L \
//        R  >----------------->3rd pass
//        M / 
//        M = 8 -> return 2     4th pass 



module.exports = findRotatedIndex