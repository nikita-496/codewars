function duplicateEncode(fn){

    var result = "";
    var arrayEncode = fn.map(item =>{
           return fn.filter(element => element === item).length
    });
   
    result = arrayEncode.map(item => {
       return (item > 1) ? result = ")" : result = "("
    });

    return result.join("")
 
};

function translateToArray (word) {
   var registr =  word.toLowerCase();
    var arrayWord = [];

    for (let i = 0; i < registr.length; i++) {
        registr[i]
        arrayWord.push(registr[i]);
    } 

    return duplicateEncode(arrayWord)
}


let word = 'Success'
console.log(translateToArray (word))

