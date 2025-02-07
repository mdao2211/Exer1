//Thay var = let
let students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Thomas", marks: 68 },
];
//Add function
function getAverageAndGradeAllStudent(students) {
  var totalMarks = 0;
  for (var i = 0; i < students.length; i++) {
    totalMarks += students[i].marks;
  }

  var averageMarks = Math.round(totalMarks / students.length);
  //  Thay " " bằng "" để tránh tốn bộ nhớ
  var grade = "";

  // Time response = nhau
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

  // Không dùng được switch vì switch chỉ so sánh giá trị cụ thể, k dùng trong khoảng
  // switch (averageMarks) {
  //   case averageMarks < 60:
  //     grade = "F";
  //     break;
  //   case averageMarks < 70:
  //     grade = "D";
  //     break;
  //   case averageMarks < 80:
  //     grade = "C";
  //     break;
  //   case averageMarks < 90:
  //     grade = "B";
  //     break;
  //   case averageMarks < 100:
  //     grade = "A";
  //     break;
  // }
  //Display HTML
  document.getElementById("getAverageMarks").innerHTML =
    "Average Marks: " + averageMarks;
  document.getElementById("getGrade").innerHTML = "Grade: " + grade;

  return { averageMarks, grade };
}

console.log(getAverageAndGradeAllStudent(students));
