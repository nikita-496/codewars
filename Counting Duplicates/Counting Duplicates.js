//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function createOriginal (text) {
    var c = {};
    var originalSymbol = "";
    var textLower = text.toLowerCase()
    var result = 0;

    //создаем данную в которой харнятся единственные экземпляры символов (назовем их оригиналами)
    for (let i = 0; i < textLower.length; i++) {
      if (!c[textLower[i]]) {
        originalSymbol += textLower[i];
        //исключаем дубликаты текущего оригигального символа
        c[textLower[i]] = 1;
      }
    }

    //Вычисляем количество символов имеющих дубликаты
    function duplicateCount (original){
    
      for (let i =0; i < original.length; i++) {
        let counter =0;
          //Проверяем ссколько каждый оригинал имеет дубликатов
          for (let k =0; k < textLower.length; k++) {
            if (original[i] === textLower[k]) {
              counter++
            }
            
          }
            //Елси счетчик больше 1, т.е. помимо самого себя же сисвол имеет дубликат
            if (counter > 1) {
              //то записываемв резултат количество таких символов
              result++ 
            }

      }
      return result
    }

    return duplicateCount(originalSymbol)
}


let word = "aabBcde"
console.log(createOriginal(word))


