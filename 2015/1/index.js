const { log } = require("console");
const fs = require("fs");

const filePath = "./2015/1/input.txt";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    // console.log(data);
    findSanta(data);
  }
});

function findSanta(data) {
  const array = [];
  array.push(data);
  const arrayOfSingleString = data.split("");
  findPosition(arrayOfSingleString);
}

// function caracterCounter(arrayOfSingleString){
//     const upperFloors = []
//     const lowerFloors = []
//     arrayOfSingleString.forEach(element => {
//         if(element === "("){
//             upperFloors.push(element)
//         }
//         if(element === ")"){
//             lowerFloors.push(element)
//         }
//     });
//     console.log(upperFloors.length);
//     console.log(lowerFloors.length);
//     console.log(upperFloors.length - lowerFloors.length);

// }

function findPosition(arrayOfSingleString) {
  let basement = 0;
  
  arrayOfSingleString.forEach((element,index) => {
      if (element === "(") {
          basement = basement + 1;
        }
        if (element === ")") {
            basement = basement - 1;
        }if(basement === -1){
            console.log(index+1);
        }
    });
    
}
