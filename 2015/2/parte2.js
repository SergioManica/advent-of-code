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

const { log } = require("console");
const fs = require("fs");
const { runInContext } = require("vm");

const filePath = "./2015/2/input.txt";

fs.readFile(filePath, "utf8", (err, inputData) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    calculateRibbon(inputData);
  }
});

function calculateRibbon(inputData) {
  presents = [];
  presents.push(inputData);

  const arrayOfPresents = presents[0].split("\n");
  let ribbonSizeArray = [];
  let smallestSide = 0;
  let bowRibbon = 0;
  let ribbonSize = 0;

  arrayOfPresents.forEach((element) => {
    let onlyDimentions = element.split("x");

    const length = parseInt(onlyDimentions[0]);
    const width = parseInt(onlyDimentions[1]);
    const height = parseInt(onlyDimentions[2]);

    l = length + length + width + width;
    w = width + width + height + height;
    h = height + height + length + length;

    const sizes = [l, w, h];

    smallestSide = Math.min(...sizes);
    bowRibbon = length * width * height;

    ribbonSize = smallestSide + bowRibbon;

    ribbonSizeArray.push(ribbonSize);
  });

  const sumOfRibbonSize = ribbonSizeArray.reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);

  console.log(sumOfRibbonSize);
}
