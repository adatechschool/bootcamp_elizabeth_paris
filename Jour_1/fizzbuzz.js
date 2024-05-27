
function fizzbuzz (n) {

    const result = []

    for (let i = 1; i < n; i++) {

        if (i%15 === 0) {
            result.push("FizzBuzz")
            continue
        }
        if (i%3 === 0) {
            result.push("Fizz")
            continue
        }
        if (i%5 === 0) {
            result.push("Buzz")
            continue
        }
        else {
            result.push(i)        
        }
    }
   return result
}

console.log(fizzbuzz(100))