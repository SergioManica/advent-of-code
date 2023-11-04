const { log } = require("console");
const fs = require("fs");

const filePath = "./2015/2/input.txt";

fs.readFile(filePath,"utf8", (err,inputData)=>{
    if (err) {
        console.error("Error reading the file:", err);
    }else{
        calculatePaper(inputData)
    }
})

    function calculatePaper(data){
        array = []
        array.push(data)
        const arrayOfPresents = array[0].split("\n")
        // console.log(arrayOfPresents);
        arraySeparatedByDimentions = []
        // const arraySeparatedByDimentions = arrayOfPresents.map((item)=>{
        //     item.split("x")
        // })

        
        arrayOfPresents.forEach(element => {
            element.split("x")
            let onlyDimentions = element.split("x")
            arraySeparatedByDimentions.push(onlyDimentions)
        });
        console.log(arraySeparatedByDimentions[0]);
    }