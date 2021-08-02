const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

// Factory function produce object

function createCircle(radius) {
  return {
    radius: radius,
    draw() {
      console.log("draw");
    },
    // location: {
    //   x: 1,
    //   y: 1,
    // },
    // isVisible: true,
    // draw: function () {
    //   console.log("draw");
    // },
  };
}

const circle1 = createCircle(1);
console.log("circle1");
