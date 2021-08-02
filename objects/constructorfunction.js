//camel notation: oneTwoThree
// pascal notation: OneTwoThree

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(1);

// new operator, this key word and use pascal convention .
