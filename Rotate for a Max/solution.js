function maxRot ( n ) {
   
    if (n < 0 || Math.floor(n) !== n) {return `Error: n - должно быть целым положительным числом`}
    
     var listNum = []
     let arrNum = [...String(n)]
 
    //Создание перевертыша
     for (let i=0; i < arrNum.length; i++) {
        if (i === arrNum.length - 1 ) break
 
        arrNum.push(arrNum.splice(i, 1).join(""))
          let changeling = arrNum.join("")
          listNum.push(Number(changeling));
     }
     listNum = listNum.concat(n)
     let maxNum = listNum.sort(function compare(a,b){
       if (a < b) return 1; 
       if (a == b) return 0; 
       if (a > b) return - 1
     })
    return maxNum[0]
  }
 
  const num = 56789 ;
 console.log(maxRot(num))