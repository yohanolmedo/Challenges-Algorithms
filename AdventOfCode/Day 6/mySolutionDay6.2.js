const fs = require("fs");

try {
  const data = fs.readFileSync("./data.txt", "utf8");
  const lines = data.split("\n").map((line) => line.split(" "));
  //console.log(data);

  function compare(array) {
    for (let i = 0; i < array.length - 3; i++) {

      const element = array.slice(i, (i+14));
      
      const setElement = ([...new Set(element)]).join("");

      if(setElement == element) {
          if (array.includes(setElement)) {
            let index = array.indexOf(setElement) + 14;
            console.log(index, setElement);
          break;
        } 
      }      
    }
  }

  for (let i = 0; i < lines.length; i++) {
    let array = lines[i].join("");
    compare(array);
  }
} catch (err) {
  console.error(err);
}
