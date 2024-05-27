// Rédigez un programme informatique qui affiche les nombres de 1 à 100 dans l’ordre, en remplaçant les multiples de 3 par le mot Fizz,
//  les multiples de 5 par Buzz, et les multiples de 15 par FizzBuzz.


function fizzBuzz (){

    let n = 1;

    while(n <= 100){
    
        if(n%15 ===0){
            console.log('FizzBuzz');
        }
        
        else if ( n%3 ===0){
            console.log("Fizz");
        }
        else if( n%5===0){
            console.log("Buzz");
        }
        else{
            console.log(n) 
        }
        n ++

        }

}

fizzBuzz()

