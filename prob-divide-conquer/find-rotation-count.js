function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length-1) {
  if (rightIdx === leftIdx)
    return rightIdx;

  if (rightIdx < leftIdx)
    return 0;
  
  let mid = leftIdx + Math.floor((rightIdx - leftIdx) / 2)

  if (arr[mid] < arr[rightIdx])
    return findRotationCount(arr, leftIdx, mid - 1);
  
  if (arr[mid] > arr[rightIdx])
    return findRotationCount(arr, mid + 1, rightIdx);

  if (arr[mid] < arr[mid - 1] && leftIdx < mid)
    return mid;

  if (arr[mid] > arr[mid+1] && rightIdx > mid)
    return mid + 1;

  //============================ Iterative Approach
  // let len = arr.length;
  // let leftIdx = 0;
  // let rightIdx = len - 1;
  // while (leftIdx <= rightIdx){
  //     let mid = leftIdx + Math.floor((rightIdx - leftIdx) / 2) ;
  //     let prev = (mid - 1 + len)  % len;
  //     let next = (mid + 1) % len;
  //     if (arr[mid] <= arr[prev] && arr[mid] <= arr[next])
  //       return mid;
  //     else if (arr[mid] <= arr[rightIdx])
  //       rightIdx = mid - 1;
  //     else if (arr[mid] >= arr[leftIdx])
  //       leftIdx = mid + 1;
  // }
  // return 0;
  // [10,11,12,7,8]
  //  L     M    R - 0 passes
  //           L 
  //           M R - 1st pass -> return 3
}

module.exports = findRotationCount