var input = prompt("Please enter your string: ");

// C1
// var swapCase = function (input) {
//   var newLetters = "";
//   for (var i = 0; i < input.length; i++) {
//     if (input[i] === input[i].toLowerCase()) {
//       newLetters += input[i].toUpperCase();
//     } else {
//       newLetters += input[i].toLowerCase();
//     }
//   }
//   return newLetters;
// };
// console.log(swapCase(input));

// C2
var solvedString = input
  .split("")
  .map(function (c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  })
  .join("");

console.log(solvedString);
