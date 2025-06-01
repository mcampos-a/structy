//Structy 
//Exercise 12/12: pairs
//Introduction 

// Write a function, pairs, that takes in an array as an argument. 
// The function should return an array containing all unique pairs 
// of elements.

// You may return the pairs in any order and the order of elements 
// within a single pair does not matter.

// You can assume that the input array contains unique elements.

// pairs(["a", "b", "c"]); // ->
// [
//    ["a", "b"],
//    ["a", "c"],
//    ["b", "c"]
// ]



//Solution I

const pairs = (elements) => {
//set up an empty array to push our unique pairs
  let result = []
//set up a loop to iterate through the input array
  for(let i=0; i<elements.length; i++){
//set up a second loop to start one index greater than i to ensure we dont duplate pairs
    for(let j=i+1; j<elements.length; j++){
//push every pair iteration to the result array
      result.push([elements[i], elements[j]])
    }
  }

  return result
};

module.exports = {
  pairs,
};


//num -> num wont be empty, it wont be null or undefined, only always getting num
//We will be returning an arr -> of nums

  //if n % 3 == 0 -> replace n with "fizz"
  //if n % 5 == 0 -> replace n with "buzz"
  //if n % 3 == 0 && n % 5 == 0 repalce n with fizzBuzz

//console.log(fizzBuzz(11), [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11])


