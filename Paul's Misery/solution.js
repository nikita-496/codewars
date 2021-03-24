function paul(x){
    const scoresOfRoutine = {'kata' : 5, 'Petes kata' : 10, 'life' : 0, 'eating' : 1}
    
    let scores = x.map(function (routine){
      return Object.entries(scoresOfRoutine).filter(element => element[0] === routine)[0][1];
    })
    let result = scores.reduce((accumulator, currentValue) => {
       return accumulator + currentValue;
    },0)

    return (result < 40) ? "Super happy!" : 
    (result < 70 && result >= 40) ? "Happy!" :
    (result  < 100 && result >= 70) ? "Sad!" : "Miserable!"
}

const routines = ['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']
console.log(paul(routines))