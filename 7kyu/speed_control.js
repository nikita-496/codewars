function gps(s, x) {
    
    if  (x.length <= 1) {return 0}

    let sections = []

    //Разбиение расстояния на участки  
    for (let i = 0; i < x.length-1; i++) {
        sections.push(x.slice(i,i+2))

    }
    //Определение средней почасовой скорости на каждом участке пути
    let hourlySpeed = sections.map(function spaeed (section) {
        let deltaDistance  = (section[1]-section[0]);
        let hourlySpeed = Math.floor((3600 * deltaDistance) / s);
        return hourlySpeed
    })
    //Цело максимальное средней скорости в час
     return hourlySpeed.sort(function (a,b) {
         return b - a 
     })[0]
}

const seconds = 20;
const x = [];

console.log(gps(seconds,x))
