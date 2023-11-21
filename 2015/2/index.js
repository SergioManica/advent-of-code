const { log } = require("console");
const fs = require("fs");

const filePath = "./2015/2/input.txt";

fs.readFile(filePath, "utf8", (err, inputData) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    calculatePaper(inputData);
  }
});

function calculatePaper(data) {
  let length = "";
  let width = "";
  let height = "";
  array = [];
  array.push(data);
  const arrayOfPresents = array[0].split("\n");

  let sum = 0;

  arrayOfPresents.forEach((element) => {
    let onlyDimentions = element.split("x");
    length = onlyDimentions[0];
    width = onlyDimentions[1];
    height = onlyDimentions[2];

    let l = length * width;
    let w = width * height;
    let h = height * length;
    let smallestSide;
    let surfaceAreaOfPresents;

    if (l <= w && l <= h) {
      smallestSide = l;
    }
    if (w <= l && w <= h) {
      smallestSide = w;
    }
    if (h <= l && h <= w) {
      smallestSide = h;
    }
    surfaceAreaOfPresents = 2 * (l + w + h) + smallestSide;
    sum += surfaceAreaOfPresents;
  });
  console.log(sum);
}

// FORMULA -> 2*l*w + 2*w*h + 2*h*l +
