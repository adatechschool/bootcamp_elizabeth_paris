// ## Fizzbuzz
// Rédigez un programme informatique qui affiche les nombres de 1 à 100 dans l’ordre,
// en remplaçant les multiples de 3 par le mot Fizz, les multiples de 5 par Buzz,
// et les multiples de 15 par FizzBuzz.


// if (i % 15 == 0) {
//     i = "Fizz"
//     arr.push(i)
// } else if (i % 5 == 0) {
//     i = "Buzz"
//     arr.push(i)
// } else if (i % 3 == 0) {
//     i = 'FizzBuzz'
//     arr.push(i)
// } else arr.push(i)


const fizzBuzz = (num) => {
    arr = []
    for (let i = 1; i<=num; i++) {
        arr.push(i)
    }
    return arr
} 

console.log(fizzBuzz(100))