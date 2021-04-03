function gps(s, x) {
    
    if  (x.length <= 1) {return 0}

    let hourlySpeed  = []

    //Разбиение расстояния на участки  
    for (let i = 0; i < x.length-1; i++) {
        hourlySpeed.push((3600 * (x[i+1]- x[i]) / s))
    }
    return Math.floor(Math.max(...hourlySpeed))

}

/*
const seconds = 15;
const x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
console.log(gps(seconds,x))
*/