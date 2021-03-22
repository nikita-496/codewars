function getSum( a,b ) {
  let maxNum = Math.max(a,b);  
  let minNum = Math.min(a,b);
  let rangeOfNumbers = [];

    while (minNum <= maxNum) {
        rangeOfNumbers.push(minNum);
        minNum++;
    }    

    const result = rangeOfNumbers.reduce(function(prevValue,currValue){
        return prevValue + currValue;
    }) 
    return result
}

/*
const a = 4;
const b = 15;
console.log(getSum(a,b))
*/