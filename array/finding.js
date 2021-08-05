// finding elements in primitive away
const numbers = [1, 3, 5, 7, 5, 55, 5];
// console.log(numbers.indexOf("a")); // if index of value is not matched the array value it will return -1
// console.log(numbers.indexOf("5"));
// console.log(numbers.lastIndexOf(5)); // we will also find last matching value
console.log(numbers.indexOf(5) !== -1); // the elemnets 5 is in the array
// or
console.log(numbers.includes(7)); // indexOf condition and includes use for same reason

console.log(numbers.indexOf(7, 2)); // 2 dia bujaitase jea 7 elemnts ta ki index of  2 ta ki index of 7 er moddeai ase kina .... jodi na thake ta hole -1 return korbe
console.log(numbers.indexOf(7, 6)); // output -1
