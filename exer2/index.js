let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// C1:
// function SortArrays(arr) {
//   for (let a = 0; a < arr.length - 1; a++) {
//     for (let b = a + 1; b < arr.length; b++) {
//       if (arr[a] > arr[b]) {
//         var i = arr[b];
//         arr[b] = arr[a];
//         arr[a] = i;
//       }
//     }
//   }
//   return arr.join(", ");
// }

// document.getElementById("sortArrays").innerHTML = "Array: " + SortArrays(arr1);

// C2
// arr1.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr1.join(","));

// C3 BubbleSort
// function BubbleSortArray(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr.join(", ");
// }

// document.getElementById("sortArrays").innerHTML =
//   "Array: " + BubbleSortArray(arr1);

// C4 TreeSort
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insertNode(root, value) {
  if (!root) {
    return new TreeNode(value);
  }

  if (value < root.value) {
    root.left = insertNode(root.left, value);
  } else {
    root.right = insertNode(root.right, value);
  }

  return root;
}
function inOrderTraversal(root, sortedArray) {
  if (root) {
    inOrderTraversal(root.left, sortedArray);
    sortedArray.push(root.value);
    inOrderTraversal(root.right, sortedArray);
  }
}

function treeSort(arr) {
  if (arr.length === 0) return [];

  let root = null;
  for (let value of arr) {
    root = insertNode(root, value);
  }

  let sortedArray = [];
  inOrderTraversal(root, sortedArray);
  return sortedArray;
}

let sortedArr = treeSort(arr1);

document.getElementById("sortArrays").innerHTML = "Array: " + sortedArr;
