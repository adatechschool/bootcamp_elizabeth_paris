
//Solution 1

function sameChararacterChecker(str) {
    let arr = str.split('')
    let count = arr.reduce(
        (accumulator, currentValue) => {
            accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
            return accumulator;
          }, {}
    )
    for (let key in count) {
        if (count[key] > 1) {
            return false;
        }
    }
    return true
}

console.log("Solution 1 : doit retourner false :",sameChararacterChecker("cccccc"))
console.log("Solution 1 : doit retourner false :",sameChararacterChecker("hello"))
console.log("Solution 1 : doit retourner true :",sameChararacterChecker("abcdefghijklmnopqrstuvwxyz"))


// Solution 2 

function sameCharRegexChecker (str) {
    reg = /^(?:([A-Za-z])(?!.*\1))*$/
    if ( str.match(reg)) { return true}
    else {return false}
}

console.log("Solution 2 : doit retourner false :",sameCharRegexChecker("cccccc"))
console.log("Solution 2 :doit retourner false :",sameCharRegexChecker("hello"))
console.log("Solution 2 :doit retourner true :",sameCharRegexChecker("abcde"))





