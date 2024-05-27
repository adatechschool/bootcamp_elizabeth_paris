// Rédigez un programme informatique qui affiche les nombres de 1 à 100 dans l’ordre, en remplaçant les multiples de 3 par le mot Fizz, les multiples de 5 par Buzz, et les multiples de 15 par FizzBuzz.

const FizzOuBuzz = (n) => {
    if (n % 3 == 0 && n % 5 == 0){
        return "FizzBuzz"
    }
    if (n % 3 == 0){
        return "Fizz"
    }
    if (n % 5 == 0){
        return "Buzz"
    }
    else return n
}

const FizzBuzz = () => {
let n = 1
while (n < 101 ){
    console.log(FizzOuBuzz(n))
    n++
}
}

console.log(FizzBuzz())