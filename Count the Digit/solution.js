function nbDig(n, d) {

    let arrSquare = [];
    let counter = 0;
    //Создание массива квадратов чисел от 0 до num
 
    while (counter <= n ) {
     arrSquare.push(counter ** 2)
     counter ++
     //возвращаем счетчик на 0, чтобы потом еще раз использовать 
       if(counter > n) {
          counter = 0
          break
       }
    }
    //преобразование к массиву состоящих из d
    let arr_d = arrSquare.map(item => String(item)).map(item => colc(item)).filter(item => item > 0);
    function colc (e) {
          counter = 0
          for (let i =0; i < e.length; i++) {
           
             if (Number(e[i]) === d) {
                (counter ++)
             }
          }
          return counter
       }    
       
       return arr_d.reduce((accumulator, item) => {
          return accumulator + item
       },0)
 }
 
 /*
 const n = 5750;
 const digital = 0;
 console.log(nbDig(n, digital))
 */