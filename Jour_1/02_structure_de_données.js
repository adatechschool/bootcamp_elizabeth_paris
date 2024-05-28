// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

//With an array
//Big O(n) = 1 boucle (temps linéaire)
const allUniqueCharacters = (string) => {
    string = string.toLowerCase();
    let arrayOfString = string.split("");
    let sortedArray = arrayOfString.sort();

    for (let i = 0; i < sortedArray.length -1; i++){
        if (sortedArray[i] === sortedArray[i + 1]){
            return false;
        }
    }
    return true;
}

console.log(allUniqueCharacters("Ananas"));



//Without another data structure : la complexité de temps augmante : Big O(n²) car nous sommes obligé de faire deux boucles pour comparer les lettres entre elles.
//C'est exponantiel (temps quadratique) : plus la chaîne augmente en longueur, plus l'algorithme mettra du temps à comparer les lettres. 

const allUniqueCharactersBis = (string) => {
    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++){
        for (let j = i + 1; j < string.length; j++){
            if (string[i] === string[j]){
                return false;
            }
        }
    }
    return true; 
}

console.log(allUniqueCharactersBis("Salut"));