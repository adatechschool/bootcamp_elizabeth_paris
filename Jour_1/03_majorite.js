function evenOdd (arrayElement) {
    let even = 0;
    let odd = 0;

    arrayElement.map((nbr) => {
        nbr % 2 === 0 ? even++ : odd++    
   }) 
   
   if(even > odd)
       return "Majorité pair"
   else if(even < odd)
       return "Majorité impair"
   else return 0

}

function majority(arrayElement) {

arrayElement.sort((a, b) => a - b );
const index = Math.floor(arrayElement.length / 2);

 return arrayElement[index]

} 

const array = [1, 1, 6, 6, 6, 4]


console.log(majority(array))