//Structy 
//Exercise 4/12: pair product
//Hashing 

// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]


//Solution I

const pairProduct = (numbers, targetProduct) => {
//set up a hash map to keep track of our array elements as keys and the indices as the values
  let map = {}
//loop through the array
  for(let i = 0; i<numbers.length; i++){
//calcualte the complemenatry product num for each element
    let complement = targetProduct / numbers[i]
//check if the complement exisits in map
//if so return the current index and the value of that complement key
    if(complement in map){
      return [i, map[complement]]
    }
//if not in the map assign the current element and index as a key/value pair to the map
    map[numbers[i]] = i
  }



};

module.exports = {
  pairProduct,
};



//parameters
//arr-> of nums, wont be empty, wont be null or undefined, only will be getting an array of positive nums
//num -> positive number, that target will be a guaranteed product of two element nums from the input array

//Return
//arr-> w/ indices of the two elements that when multiplied together result in the target num.

//Example
console.log(pairProduct([3, 2, 5, 4, 1], 8), [1,3])
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35), [1,4])