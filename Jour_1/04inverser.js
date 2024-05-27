

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ];


function flip (array, orientation) {

    // Création d'une copie profonde du tableau pour ne pas modifier le tableau de reference
    const arrayCopy = array.map(item => [...item]);


    if (orientation === "horizontal") {
        
        for (let i = 0 ; i < array.length ; i++) {

            arrayCopy[i].sort((a,b) => b-a)

        }
        return arrayCopy
    }


    if (orientation === "vertical") {
       
        arrayCopy.reverse()

        return arrayCopy
    }


}

console.log("Horizontal : ", flip(arr,"horizontal" ))
console.log("Vertical : ",flip(arr,"vertical" ))