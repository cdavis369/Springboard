function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  
  while (leftIdx <= rightIdx) {
    let mid = Math.floor((rightIdx - leftIdx) / 2);
    let prev  = arr[mid - 1]
    let next = arr[mid + 1]

    if (arr[mid] < arr[prev] && mid > leftIdx)
      return mid;
    else if (arr[next] < arr[mid] &&  mid < rightIdx)
      return mid + 1;
    else if (arr[rightIdx] > arr[mid])
      rightIdx = mid - 1;
    else 
      leftIdx = mid + 1;

  }
  return 0;
}

module.exports = findRotationCount