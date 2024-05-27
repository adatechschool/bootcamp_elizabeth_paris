// A partir d'un tableau à deux dimensions, écrire une fonction qui l'inverse horizontalement ou verticalement.

// Exemple

// Pour ce tableau:

// let array = [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ]
// En mode "horizontal", on obtient

// > flip(array, 'horizontal')
// > [[3,2,1],[6,5,4],[9,8,7]]
// Tandis qu'en mode "vertical", on obtient

// > flip(array, 'vertical')
// > [[7,8,9],[4,5,6],[1,2,3]]


function reverseArrayHorizont(array){
    let newArray = []

    for (let i=0; i<array.length; i++){
        newArray.push(array[i].reverse())
        
    }

    return newArray
};



function reverseArrayVertical(array){
    let newArray = array.reverse()

   return newArray

};


console.log(reverseArrayHorizont([[1,2,3],[4,5,6],[7,8,9]]))
console.log(reverseArrayVertical([[1,2,3],[4,5,6],[7,8,9]]))

