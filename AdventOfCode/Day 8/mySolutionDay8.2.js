const fs = require("fs");

try {
  const data = fs.readFileSync("./data.txt", "utf8");
  const lines = data.split("\n").map((line) => line.split(""));
  let sum = 0;

  function SearchElement(numbers, indexAll) {
    for (i = 0; i < numbers.length; i++) {
      let element;
      if (i > 0 && i < numbers.length - 1) {
        element = numbers[i];
      }

      if (element != null) {
        let indexElement = i;
        
        const searchLeftV = searchLeft(element, indexElement, numbers.split(""))
        const searchRightV = searchRight(element, indexElement, numbers.split(""))
        const searchUpV = searchUp(element, indexElement, indexAll)
        const searchDownV = searchDown(element, indexElement, indexAll)
        let productElement = [];

        switch (true) {
          case searchLeftV > 0:
            productElement.push(searchLeftV);       

          case searchRightV > 0:
            productElement.push(searchRightV); 
            
          case searchUpV > 0:
            productElement.push(searchUpV);  

          case searchDownV > 0:          
          productElement.push(searchDownV);                 
        }     
        let product = productElement.reduce((accumulator, currentValue) => accumulator * currentValue);   
        if(product > sum) sum = product;
      }
    }
  }

  function searchLeft(element, indexElement, row) {
    let rowLeft = row.slice(0, indexElement);
    let acum = 0;
    
    for (let i = rowLeft.length - 1; i >= 0; i--) {
      if(rowLeft[i] >= element) {
        acum += 1;
        break
      } else {
        acum += 1;
      }  
    }  
    return acum > 0 ? acum : 0;
  }

  function searchRight(element, indexElement, row) {
    let rowRight = row.slice(indexElement + 1, row.length);
    let acum = 0;
    for(let i = 0; i<rowRight.length; i++) {
      if(rowRight[i] >= element) {
        acum += 1;
        break
      } else {
        acum += 1;
      }  
    }
    return acum > 0 ? acum : 0;
  }

  function searchUp(element, indexElement, indexAll) {
    let arrayPartial = [];    
    let acum = 0;
    for (let i = 0; i < indexAll; i++) {
      arrayPartial.push(lines[i][indexElement]);
    }

    for (let i = arrayPartial.length - 1; i >= 0; i--) {
      if(arrayPartial[i] >= element) {
        acum += 1;
        break
      } else {
        acum += 1;
      }  
    }  
      return acum > 0 ? acum : 0;
  }

  function searchDown(element, indexElement, indexAll) {
    let arrayPartial = [];    
    let acum = 0;
    for (let i = indexAll + 1; i < lines.length; i++) {
      if(lines[i][indexElement] >= element) {
        acum += 1;
        break
      } else {
        acum += 1;        
      }
    }    
    return acum > 0 ? acum : 0;
  }

  for (let i = 1; i < lines.length - 1; i++) {
    const elements = lines[i].join("");
    let indexElement = lines.indexOf(lines[i]);
    SearchElement(elements, indexElement);
  }

  console.log(sum);
} catch (err) {
  console.error(err);
}
