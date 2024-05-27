// Implémentez un algorithme pour déterminer si une chaîne contient tous des caractères uniques. Que se passe-t-il si vous ne pouvez pas utiliser de structures de données supplémentaires ?

const uniquesCaracteres = (string) => {
    let arr = string.split("")
    unique = true
    for (let i = 0 ; i < arr.length ; i ++){
        for (let j = i+1 ; j < arr.length ; j++){
            if (arr[i] == arr[j]){
                unique = false
            }
        }
    }
    return unique
}

console.log(uniquesCaracteres("abcdef1231"))