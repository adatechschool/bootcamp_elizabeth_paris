
//a string has all unique characters. 
//ways to handle this? get  rid of duplicates? 
//use a set to store unique characters
//time complexity: O(n^2)
//space complexity: O(n)
//1 .Iterate over (for)boucle?
//Check for the character in the rest of the string (from i+1 onwards)
// 2.Duplicate found, return false
//3.// If loop completes, no duplicates found, return true
//Way to go? === IndexOf methode!?
//indexOf returns the index of the first occurrence of the specified value in the array, or -1 if it is not found.

/*function isUniqueChars(str) {
    for (let i = 0; i < str.length; i++) {

      if (str.indexOf(str[i]) !== -1 && i !== str.indexOf(str[i])) {
        return false;
      }
    }
    return true;
  }
  
   
  let input = "comehome";
  if (isUniqueChars(input)) {
    console.log("Got it, It's unique!");
  } else {
    console.log("Not yet,not unique");
}*/
      


//Ok ,I have learned i can use "a hash map-based approach"
//its more improved and efficient regardless of the size of the chars!


function hasUniqueChars(str) {
    let charMap = new Map(); // Use a Map for the hash map
    for (let char of str) {
        if (charMap.has(char)) {
            return false; // Character is duplicated
        }
        charMap.set(char, true); // Mark character as seen
    }
    return true; // All characters are unique
}

let input =  "ggggggggg";
if (hasUniqueChars(input)) {
    console.log("YES, GOT UNIQUE CHARS!");
} else {
    console.log("OH NO! The string has duplicate CHARS!.");
}
