// Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

// S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.

// Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0

// > majority([3,1,4,1])
// > "1"

// > majority([33,44,55,66,77])
// > "Majorité impairs"

// > majority([1,2,3,4])
// > "Pas de majorité"

const majority = (arr) => {

let occurenceMaximale = 1
let nombreMajoritaire = 0
let impairs = 0
let pairs = 0

for (let i = 0 ; i < arr.length ; i++){
    let occurence = 1
    if (arr[i] % 2 == 0){
        pairs ++
    } else impairs ++
    for (let j = i+1 ; j < arr.length ; j++){
        if (arr[i] == arr[j]){
            occurence ++
            if (occurence > occurenceMaximale){
                occurenceMaximale = occurence
                nombreMajoritaire = arr[i]
            } else if (occurence == occurenceMaximale){
                nombreMajoritaire = 0
            }}
    }
}

if (nombreMajoritaire == 0){
    if(pairs > impairs){
        return "majorité pairs"
    }
    if (impairs > pairs){
        return "majorité impairs"
    }
    if (impairs == pairs){
        return "pas de majorité"
    }
} else return nombreMajoritaire

}

console.log(majority([33,44,55,66,77,33,77,66,66,44,77,55,44,20])) 