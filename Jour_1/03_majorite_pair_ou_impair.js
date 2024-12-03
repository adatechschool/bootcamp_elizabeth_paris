//## ♣️ Majorité, pairs ou impair ?
// [Source: Newsletter de Cassidoo](https://cassidoo.co/)
// Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.
// S'il n'y a pas d'élément qui apparaît plus qu'un autre,
// retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.
// Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0
// Exemple:

// > majority([3,1,4,1])
// > "1"

// > majority([33,44,55,66,77])
// > "Majorité impairs"

// > majority([1,2,3,4])
// > "Pas de majorité"

const majority = (arr) => {
    let odd = [];
    let even = []; 

    arr.map((element) => {
        if(element % 2 == 0) {
            even.push(element)
        } else odd.push(element);

    });
    
    if(odd.length > even.length) {
        return `${odd} => c'est majorité impairs`
    } else if (odd.length < even.length) {
        return `${even} => c'est majorité pairs`
    } else return "Pas de majorité"

}

console.log(majority([1,2,3,4,4]))