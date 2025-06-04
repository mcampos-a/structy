//Structy 
//Exercise 3/12: pair sum
//Hashing 

// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array 
// containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
// pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
// pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
// pairSum([1, 6, 7, 2], 13); // -> [1, 2]

//Solution I

const pairSum = (numbers, targetSum) => {
//set up a hash map to keep track of our elements and their index in a key/value pairing
  let map = {}
//loop through the input array 
  for(let i=0; i<numbers.length; i++){
//calculate the complement value for each element that adds up to the target num
    complement = targetSum - numbers[i]
//check if the complement exists in the1 map. IF so, return the index you are at and the complement index from the map
    if(complement in map){
      return [i, map[complement]]
    }
//else, store the current element and index in the map. Key/value pairing
    map[numbers[i]] = i
  }

};

module.exports = {
  pairSum,
};



//parameters
//arr-> of nums that add up to a target input, wont be empty wont be null or undefined, only always we will be getting an arr of nums
//num-> input num that is the sum of two elements in the input arr. Wont be empty, wont be null or undefined, only always we will get a num

//Return
//arr-> w/ pair of indecies of the elements that add up to the target input num. They indecies must be unique. Cant reuse the same index

//Example
//console.log(pairSum([1,3,5,6,3,],7) [0,3])