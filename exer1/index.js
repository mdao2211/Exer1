var students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Thomas", marks: 68 },
];

var totalMarks = 0;
for (var i = 0; i < students.length; i++) {
  totalMarks += students[i].marks;
}

var averageMarks = Math.round(totalMarks / students.length);

var grade = " ";

if (averageMarks < 60) {
  grade = "F";
} else if (averageMarks < 70) {
  grade = "D";
} else if (averageMarks < 80) {
  grade = "C";
} else if (averageMarks < 90) {
  grade = "B";
} else if (averageMarks < 100) {
  grade = "A";
}

console.log("Average Marks: " + averageMarks);
console.log("Grade: " + grade);
