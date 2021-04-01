const binaryArrayToNumber = arr => {
    const degree = 2;
    let decimal = 0;
    let rang = arr.slice("").reverse();

    // Определям разряд цифр числа (из двоичной системы) с права на лева по возрастанию
    for (let i = arr.length-1; i >= 0; i--) {
        decimal += rang[i] * degree ** i 
    };
   return decimal
  };

  const source = [0,1,1,0]
  console.log((binaryArrayToNumber(source)))