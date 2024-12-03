// A partir d'un tableau à deux dimensions, écrire une fonction qui l'inverse horizontalement ou verticalement.
// Exemple

// Pour ce tableau:

let array = [
[1,2,3],
[4,5,6],
[7,8,9]
]

// En mode "horizontal", on obtient

// flip(array, 'horizontal')
// [[3,2,1],[6,5,4],[9,8,7]]

// Tandis qu'en mode "vertical", on obtient

// flip(array, 'vertical')
// [[7,8,9],[4,5,6],[1,2,3]]

const flip = (array, str) => {
    if (str === "vertical") {
        return array.reverse()
    } else if (str === "horizontal") {
        array.forEach((x)=> x.reverse())
        return array
    }
}

console.log(flip([[1,2,3],[4,5,6],[7,8,9]], "horizontal"))