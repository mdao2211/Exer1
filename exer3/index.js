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

let arr = [1, 7, 13, 14, 15, 26, 37, 48, 99, 110];

let arr1 = interpolationSearch(arr, 13);
document.getElementById("exer31").innerHTML = "After: " + arr1;
let arr2 = interpolationSearch(arr, 26);
document.getElementById("exer32").innerHTML = "After: " + arr2;
let arr3 = interpolationSearch(arr, 0);
document.getElementById("exer33").innerHTML = "After: " + arr3;
let arr4 = interpolationSearch(arr, 99);
document.getElementById("exer34").innerHTML = "After: " + arr4;
