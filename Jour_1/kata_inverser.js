function inverse (arrayOfArrayNumer,orientation) {
    if (orientation == "horizontale") {
        for (let i = 0; i<arrayOfArrayNumer.length; i++) {
            arrayOfArrayNumer[i].reverse()
            
        }
        return arrayOfArrayNumer
    }
    return false
}

//console.log(inverse([[1,2,3],[4,5,6],[7,8,9]], "horizontale"))

module.exports = inverse;