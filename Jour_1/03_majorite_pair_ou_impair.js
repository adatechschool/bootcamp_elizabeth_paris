// Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

// S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.

// Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0

// Exemple

// > majority([3,1,4,1])
// > "1"

// > majority([33,44,55,66,77])
// > "Majorité impairs"

// > majority([1,2,3,4])
// > "Pas de majorité"


const majorityPairImpair = (array) => {
    //Compter les occurrences :
    const counter = {};
    array.forEach(element => {
        if(counter[element]){
            counter[element] += 1;
        } else {
            counter[element] = 1;
        }
    });

    //Trouver l'élément avec la valeur max : 
    let maxCount = 0;
    let mostFrequentElement = null;

    for (const [element, count] of Object.entries(counter)){
        if (count > maxCount){
            maxCount = count;
            mostFrequentElement = element;
        }
    }

    //Vérifier s'il y a un élément majoritaire unique :
    let uniqueMostFrequent = true;
    for (const [element, count] of Object.entries(counter)){
        if(count === maxCount && element !== mostFrequentElement){
            uniqueMostFrequent = false;
            break;
        }
    }

    if(!uniqueMostFrequent){
        //Compter les nombres pairs et impairs
        let evenCount = 0;
        let oddCount = 0;
        array.forEach(num => {
            if (num % 2 === 0){
                evenCount++;
            } else {
                oddCount++;
            }
        });

        //Déterminer la majorité pair ou impair
        if (evenCount > oddCount){
            return "Majorité pairs";
        } else  {
            return "Majorité impairs"
        }
    } else {
        return mostFrequentElement;
    }
}

console.log(majorityPairImpair([33,44,55,66,77]));