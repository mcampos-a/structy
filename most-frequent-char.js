//Structy 
//Exercise 2/12: most frequent char
//Hashing 

//Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

// mostFrequentChar('bookeeper'); // -> 'e'
// mostFrequentChar('david'); // -> 'd'
// mostFrequentChar('abby'); // -> 'b'
// mostFrequentChar('mississippi'); // -> 'i'


//Solution I

const mostFrequentChar = (s) => {
//set up an empty hash map to keep track of our letters
  let map = {}
//Loop through the str and populate the map. IF the letter already exists in out map, add one to it else set it equal to 0
  for( let letter of s){
    if(!(letter in map)){
      map[letter] = 0
    }
    map[letter] += 1
  }
//Loop thorugh the input str again and set up a variable to store the most recent value
  let best = null
  for(let letter of s){
//comapre the value to the max amount of occurance. Max value logic. 
    if(best === null || map[letter] > map[best]){
      best = letter
    }
  }
//return the value with the meximum occruances stored in our best variable
  return best

};

module.exports = {
  mostFrequentChar,
};


//parameters
//str -> one word, wont be empty, wont be null, only expect valid str inputs

//Return
//str -> return the letter that appears the most in the input str. IF there is a tie return the first letter that appears 

//Example
//console.log(mostFrequentChar('bookeeper'), 'e')
//console.log(mostFrequentChar('mississippi'), 'i')

