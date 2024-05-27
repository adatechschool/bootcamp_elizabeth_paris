

//1. inverse table vertical or horizontal;
// 2. use reverse direction methode (.reverse/.flip)
 // 3. Reverse the order of the subarrays
  //4.  Transpose the matrix like ((m \times n),to become (n \times m))
 // ok, let me get errors!!
 // console()

function flip(array, direction) {
    if (direction === 'horizontal') { 
       
        return array.reverse();
    } else if (direction === 'vertical') {
        return array[0].map((_, colIndex) =>
            array.map(row => row[colIndex]) 

        );
    } else {
        throw new Error('Invalid direction. Must be "horizontal" or "vertical".');
    }
}



let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

];

console.log(flip(array, 'horizontal')); 
console.log(flip(array, 'vertical')); 




