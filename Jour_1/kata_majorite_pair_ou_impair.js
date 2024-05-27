/*
Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.
S'il n'y a pas d'élément qui apparaît plus qu'un autre, 
retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.
Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0
*/

function majorite (tableau_nombre) {
    if (tableau_nombre.length == 1) {
        return tableau_nombre[0]
    }
    else if (tableau_nombre.length > 1) {

    }
    return false

}


module.exports = majorite;