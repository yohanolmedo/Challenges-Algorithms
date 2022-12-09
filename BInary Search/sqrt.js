

var mySqrt = function(x) {
  //  let a = ((x == 2) && (x > 0)) ? 1 : 0;
    if((x <= 2) && (x > 0)) {
        return 1;
    } else if (x == 0) {
        return 0;
    }

    let min = 0;
    let max = x;    
    while(min < max) {                
        let middle = Math.floor((min + max) / 2);

        if((middle * middle) == x) return middle;
        
        if (((middle - 1) * (middle - 1)) == x) {            
            //console.log("yohan", middle - 1)
            return middle - 1;
        }    
        if((middle * middle) > x) {
            max = middle;
           // console.log(min)
        }
        if(((middle * middle) > x) && ((middle - 1) * (middle - 1) < x)) {            
            return middle - 1;
        }
        if((middle * middle) < x) {
            min = middle + 1;
           // console.log(min)
        }
        
        // console.log(middle)        
    }  
};

console.log(mySqrt(9));


// 1 2 3 4 5 6 7 8
// 1 2 3 4
// 1 2              

