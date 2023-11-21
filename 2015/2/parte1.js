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

// Os elfos também estão com pouca fita. As fitas têm todas a mesma largura, 
// então eles só precisam se preocupar com o comprimento que precisam solicitar, 
// que novamente gostariam que fosse exato.

// A fita necessária para embrulhar um presente tem a distância mais curta nas 
//laterais ou o menor perímetro de qualquer face. Cada presente também requer um laço feito de fita; 
//os pés de fita necessários para o laço perfeito são iguais aos pés cúbicos de volume do presente.

//Não pergunte como eles amarram o laço; eles nunca vão contar.

// Por exemplo:

// Um presente com dimensões 2x3x4 requer 2+2+3+3 = 10 pés de fita para 
//embrulhar o presente mais 2*3*4 = 24 pés de fita para o laço, totalizando 34 pés.
// Um presente com dimensões 1x1x10 requer 1+1+1+1 = 4 pés de fita para
// embrulhar o presente mais 1*1*10 = 10 pés de fita para o laço, totalizando 14 pés. 

// Quantos pés totais de fita eles devem pedir?
