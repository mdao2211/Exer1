var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// C1
// for (a = 0; a < arr1.length - 1; a++) {
//   for (b = a + 1; b < arr1.length; b++) {
//     if (arr1[a] > arr1[b]) {
//       var i = arr1[b];
//       arr1[b] = arr1[a];
//       arr1[a] = i;
//     }
//   }
// }

// console.log(arr1.join(","));

// C2
arr1.sort(function (a, b) {
  return a - b;
});

console.log(arr1.join(","));


