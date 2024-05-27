function inverse (arrayOfArrayNumber,orientation) {
    if (orientation == "horizontale") {
        for (let i = 0; i<arrayOfArrayNumber.length; i++) {
            arrayOfArrayNumber[i].reverse()
            
        }
        return arrayOfArrayNumber
    }
    else if (orientation == "verticale") {
        arrayOfArrayNumber.reverse()
        return arrayOfArrayNumber
    }
    return false
}

//console.log(inverse([[1,2,3],[4,5,6],[7,8,9]], "horizontale"))

module.exports = inverse;