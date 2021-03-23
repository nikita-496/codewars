function printerError(s) {
   const size = s.length
    let check = s.replace(/[a-m]/g, "-").split("").filter(element => element === "-").length
    let erros = size - check

    const result = erros + "/" + size;
    return result
}
/*
const str = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'
console.log(printerError(str))
*/