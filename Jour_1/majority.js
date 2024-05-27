

//this is all about even and odd numbers!
// but i have 3 table cases here, 
//1. pairs tables shld return = 0;
// impairs tables shld return = 1;
//Hash map ="forEach" methode!
//Find the number with the highest frequency
//Convert string keys back to numbers {parseInt}
// Check for majority
// Count pairs and odds
// Determine majority pairs or odds
// of coz console!
function majority(arr) {
    const count = {}; 
    arr.forEach(num => {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    });

    let maxCount = 0, majorityNum = null;
   
    for (const num in count) {
        if (count[num] > maxCount) {
            maxCount = count[num];
            majorityNum = parseInt(num); 
        }
    }
 
    //checking the majority!
    if (maxCount > Math.floor(arr.length / 2)) {
        return majorityNum.toString();
    }

 // Counting pairs and odds
    let pairs = 0, odds = 0;
    for (const num of arr) {
        if (num % 2 === 0) {
            pairs++;
        } else {
            odds++;
        }
    }

    // Determine majority pairs or odds
    if (pairs > odds) {
        return "majority pairs";
    } else if (odds >= pairs) {
        return "majority odds";
    } else {
        return 0;
    }
}

console.log(majority([3, 1, 4, 1])); //"1"
console.log(majority([33, 44, 55, 66, 77])); // "Majority impairs"
console.log(majority([1, 2, 3, 4])); // "no majority"



