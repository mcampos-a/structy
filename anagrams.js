//Structy 
//Exercise 1/12: anagrams
//Hashing 

// 
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. 
// Anagrams are strings that contain the same characters, but in any order.

//Solution I

const anagrams = (s1, s2) => {
//set up a hash map to create a record of all letters in both input strings
  let map1 = {}
//loop through s1 and populate map1
  for(char of s1){
    map1[char] = (map1[char] || 0) + 1
  }
//loop through s2 and check if the charaters are found in map if so, subtract one from the key value
  for(check of s2){
    if(check in map1){
      check -= 1
    }else{
//if a character is not found in map then return false
      return false
    }
  }
//check if any count in map is negative. If so return false
  for(count in map1 !== 0){
    return false
  }
//if we make it through our checks return true
  return true
};


module.exports = {
  anagrams,
};


// anagrams('restful', 'fluster'); // -> true
// anagrams('cats', 'tocs'); // -> false
// anagrams('monkeyswrite', 'newyorktimes'); // -> true
// anagrams('paper', 'reapa'); // -> false
// anagrams('elbow', 'below'); // -> true


//paramaers
//str1, str2 -> wont be empty, wont be null or undefined, only always be strs

//Return
//boolean -> if both strings contain the same characters return true
//if a single char is missing return false

//Example
//console.log(anagrams('restful', 'fluster'), true)
//console.log(anagrams('cats', 'tocs'), false)
