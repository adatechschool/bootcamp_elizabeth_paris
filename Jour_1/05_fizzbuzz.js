// Rédigez un programme informatique qui affiche les nombres de 1 à 100 dans l’ordre, en remplaçant les multiples de 3 par le mot Fizz, les multiples de 5 par Buzz, et les multiples de 15 par FizzBuzz.

const fizzBuzz = () => {
    let number = 1;
    let arrayOfFizzbuzz = [];
    while(number < 101){
        if (number % 15 === 0) {
            arrayOfFizzbuzz.push("FizzBuzz");
        } else if (number % 5 === 0) {
            arrayOfFizzbuzz.push("Buzz");
        } else if (number % 3 === 0) {
            arrayOfFizzbuzz.push("Fizz");
        } else {
            arrayOfFizzbuzz.push(number);
        }
        number++;
    }
    return arrayOfFizzbuzz;
}

console.log(fizzBuzz());