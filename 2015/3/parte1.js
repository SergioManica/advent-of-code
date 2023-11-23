// Papai Noel está entregando presentes para uma grade bidimensional infinita de casas.

// Ele começa entregando um presente na casa de seu local de partida e, em seguida, um elfo no Pólo Norte
// liga para ele via rádio e diz para onde ir em seguida. Os movimentos são sempre exatamente uma casa
// para o norte (^), sul (v), leste (>) ou oeste (<). Após cada mudança, ele entrega outro
// presente na casa de seu novo local.

// No entanto, o elfo no Pólo Norte comeu gemada demais e, portanto, suas instruções estão um pouco erradas,
// e o Papai Noel acaba visitando algumas casas mais de uma vez. Quantas casas recebem pelo menos um presente?

// Por exemplo:

// > entrega presentes em 2 casas: uma no local inicial e outra ao leste.
// ^>v< entrega presentes para 4 casas em um quadrado, inclusive duas vezes para a
// casa em seu local inicial/final.
// ^v^v^v^v^v entrega um monte de presentes para algumas crianças muito sortudas em apenas 2 casas.
// Para começar, obtenha informações sobre o quebra-cabeça.

const { log } = require("console");
const fs = require("fs");
const { loadavg } = require("os");

const filePath = "./2015/3/input.txt";

fs.readFile(filePath, "utf8", (err, inputData) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    giftCounter(inputData);
  }
});

let arrayOfMovements = [];
let nonRepeatedMovements = [];

function giftCounter(inputData) {
  arrayOfMovements.push(inputData);
  arrayOfMovements = inputData.split("");

  let x = 0;
  let y = 0;
  arrayOfMovements.forEach((movement) => {
    if (movement === ">") {
      x++;
    }
    if (movement === "<") {
      x--;
    }
    if (movement === "^") {
      y++;
    }
    if (movement === "v") {
      y--;
    }
    position = `${x}.${y}`;
    isEqual = false;
    nonRepeatedMovements.forEach((element) => {
      if (element === position) {
        isEqual = true;
      }
    });
    // EXERCICIO NAO FINALIZADO
  }); 
}
