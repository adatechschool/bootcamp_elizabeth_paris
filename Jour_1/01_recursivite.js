function stairs(n) {

    if(n === 0) return 1

    if(n < 0) return 0

    return stairs(n - 1) + stairs(n - 2) + stairs(n - 3)

}

console.log(stairs(100))

