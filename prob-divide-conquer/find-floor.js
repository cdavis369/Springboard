function findFloor(arr, val) {
  if (arr[0] > val)
    return -1;

  let n = arr.length - 1;
  
  if (arr[n] < val)
    return arr[n];

  let left = 0;
  let right = n;
  while (left <= right) {
    let mid = Math.floor((right - left) / 2)
    if (arr[mid] < val && arr[mid + 1] > val)
      return arr[mid];
    else if (arr[mid] > val && arr[mid - 1] < val)
      right = mid - 1;
    else
      left = mid + 1;
  }
  return -1;
}

module.exports = findFloor