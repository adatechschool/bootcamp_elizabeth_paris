function random() {
    return Math.round(Math.random() * (3 - 1) + 1);
}

let seed = [];

function up(n) {
    if (n > 0) {
        let randomValue = random(); 
        fin = verif( randomValue, n)
        n = n - fin; 
        seed.push(fin);  
        up(n);
    } else {
        console.log('fin, voici la seed ', seed, "et voici n", n);
    }
}


function verif (number, value){
   let result
    if (number > value){
        result = random()
        verif(number, value)
    }else {
        console.log(result)
        return result
    }
    
}
up(10);
