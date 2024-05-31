// Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

// S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.

// Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0

// Exemple

// ```
// > majority([3,1,4,1])
// > "1"

// > majority([33,44,55,66,77])
// > "Majorité impairs"

// > majority([1,2,3,4])
// > "Pas de majorité"
// ```



function majority(array){

    let occurence = 0;
    let newArray = [];

    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if((array[i]===array[j])||(array[i+1]===array[j+1])){
                // occurence++
                newArray.push(array[i])
            }
        }
    }
    return newArray
}


console.log(majority([4,1,1,4]))