
function majority (arr) {



    // Element le plus frequent :

    let count = arr.reduce(
        (accumulator, currentValue) => {
            accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
            return accumulator;
        }, {}
    )

    const values = Object.values(count);

    const sortedValues = values.sort((a, b) => b - a)
    const resultKey = Object.keys(count).filter(k => count[k] === Math.max(...values));
    

    if (sortedValues[0] !== sortedValues[1]) {
        return "Le chiffre " + resultKey.join() + " est l'élément qui apparaît le plus fréquemment dans le tableau" 
    }



    // majorité par paire / impaire :
    
    let odd = 0 
    let even = 0

    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i]%2 === 0) even++
        if (arr[i]%2 !== 0) odd++
    }
    if (even>odd) return "Majorité pairs"
    if (odd>even) return "Majorité impairs"
    

    // Pas de majorité : 

    return "Pas de majorité"
}

console.log("Le resultat doit etre 1 :",majority([3,1,4,1]))
console.log("Le resultat doit etre 6 :",majority([3,1,4,1,6,6,6]))
console.log("Le resultat doit etre Pas de majorité :",majority([3,2,4,1]))
console.log("Le resultat doit etre Majorité impairs :",majority([33,44,55,66,77]))
console.log("Le resultat doit etre Majorité pairs :",majority([4,4,4,5,5,5,2,2,2]))
