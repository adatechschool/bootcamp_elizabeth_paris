/*
Rédigez un programme informatique qui affiche les nombres de 1 à 100 dans l’ordre, 
en remplaçant les multiples de 3 par le mot Fizz, 
les multiples de 5 par Buzz, 
et les multiples de 15 par FizzBuzz.
*/

function fizzBuzz () {
    /*
    affiche nombre (comportement par défaut)
    si multiple de 3, remplace nombre par "Fizz"
    si multiple de 5, remplace nombre par "Buzz"
    si multiple de 15, remplace nombre par "FizzBuzz"
        15 est un multiple de 3 et 5, donc vérifier mult 15 en premier
    */
    for (let i = 1; i<=100; i++) {
        if (i%15 == 0) {
            console.log("FizzBuzz")
        }
        else if (i%5 == 0) {
            console.log("Buzz")
        }
        else if (i%3 == 0) {
            console.log("Fizz")
        }
        else {
            console.log(i)
        }
    }
}

fizzBuzz()