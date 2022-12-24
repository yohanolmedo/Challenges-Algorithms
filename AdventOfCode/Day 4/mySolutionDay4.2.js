//challengeLink = https://adventofcode.com/2022/day/4
const fs = require("fs");

try {
    const data = fs.readFileSync("./data.txt", "utf8");
    const lines = data.split("\n").map(line => line.split(","));
    let acumulater = 0;
    function compareNumbers(array) {
        const result = array.map(x => x.split("-").map(Number))
                .sort((a, b) => {
                    const oneSize = a[1] - a[0];
                    const twoSize = b[1] - b[0];
                    return twoSize - oneSize;
                  });
         
        const rangeInit = (result[0]);
        const rangeEnd = result[1];

        if ((rangeInit[1] >= (rangeEnd[0])) && (rangeInit[0] <= (rangeEnd[1])) ) {
            acumulater += 1;
        }
        else {
            acumulater;
        }
    }   

    
    for(let i=0; i<lines.length; i++) {
        compareNumbers(lines[i]);
    }

    console.log(acumulater);

} catch (err) {
    console.error(err);
}    