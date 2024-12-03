// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const uniqChar = (char) => {
    for( let i = 0; i < char.length; i ++) {
        for( let x = i + 1; x < char.length ; x++){
            if(char[i] == char[x]) return "this string does not all unique characters"
        }
    }
    return "this string contains all unique characters";

}


console.log(uniqChar('abcdefa'))