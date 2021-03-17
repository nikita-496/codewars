//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
   var numArray = numbers.split(" ") 
   var sortArray = numArray.map(element => Number(element)).sort(compareNumeric)
   var result = String(sortArray[0]).concat(" ", String(sortArray[sortArray.length-1]))
   function compareNumeric(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
  }

  return result
}
   

  const number = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"
  console.log(highAndLow(number))