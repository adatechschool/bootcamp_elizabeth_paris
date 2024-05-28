let array = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
    ]

function revert(arrayElement) {
arrayElement.map((subArr) => {
    subArr.reverse()
})
 return arrayElement
}

console.log(revert(array))