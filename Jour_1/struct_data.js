//Implémentez un algorithme pour déterminer si une chaîne de caractères contient tous des caractères uniques.
// Que faire si vous ne pouvez pas utiliser de structures de données supplémentaires ?

function isUniqueChars (string){
array = string.split("").sort()
for (let i=0; i<array.length-1; i++)
    if(array[i] === array[i+1]){
        return false
    }
    
    return true
}

console.log(isUniqueChars("pourquoie"))