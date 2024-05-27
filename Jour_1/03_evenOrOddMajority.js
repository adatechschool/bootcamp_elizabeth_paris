"use strict";
function majority(integers) {
    // compter le nombre d'occurrences de chaque caractère
    // trier
    let oddEvenBalance = 0;
    let dic = {};
    // pour chaque caractère : si le suivant est identifique, ajouter 1
    for (let i of integers) {
        // si dic[i] n'existe pas : le créer
        if (!dic[i])
            dic[i] = 0;
        dic[i]++;
        if (i % 2 === 0) {
            oddEvenBalance++;
        }
        else {
            oddEvenBalance--;
        }
    }
    // déterminer s'il y a un maximum
    let maxKey = null;
    let maxValue = 0;
    for (const [key, value] of Object.entries(dic)) {
        if (value === maxValue) {
            maxKey = null;
        }
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }
    // retourner la clé la + fréquente s'il y en a une
    if (maxKey !== null)
        return maxKey.toString();
    // en cas d'égalité, retourner pair ou impair
    if (oddEvenBalance > 0)
        return "Majorité pairs";
    if (oddEvenBalance < 0)
        return "Majorité impairs";
    // sinon, retourner 0
    return "Pas de majorité";
}