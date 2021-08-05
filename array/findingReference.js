const courses = [
  { id: 1, sub: "bangla" },
  { id: 2, sub: "English" },
];

// .findIndex use koira amra index number ber korte ari
const course = courses.find((course) => {
  return course.sub === "bangla";
});
console.log(course);
