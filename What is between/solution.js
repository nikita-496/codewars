function between(a, b) {
    if (a >= b ) {return 'errors: the function must take the value a, where a < b'};
    let range = [];

    for (let i = a; i <= b; i++) {
        range.push (i)
    }
      return range
  }
/*
  const a = -2;
  const b = 2;
  console.log(between(a,b))
  */