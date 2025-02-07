function interpolationSearch(arr, target) {
  const length = arr.length - 1;
  let low = 0;
  let high = length;
  let position = -1;
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    position =
      low +
      Math.floor(((high - low) * (target - arr[low])) / (arr[high] - arr[low]));
    if (arr[position] === target) {
      return position;
    }
    if (arr[position] < target) {
      low = position + 1;
    } else {
      high = position - 1;
    }
  }
  return -1;
}

var arr = [1, 7, 13, 14, 15, 26, 37, 48, 99, 110];

console.log(interpolationSearch(arr, 13));
console.log(interpolationSearch(arr, 26));
console.log(interpolationSearch(arr, 0));
console.log(interpolationSearch(arr, 99));
