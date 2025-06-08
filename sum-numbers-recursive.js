//Structy 
//Exercise 4/9: sum numbers recursive
//Recursion

// Watch the Approach video first!

// Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. 
// All elements will be integers. Solve this recursively.

sumNumbersRecursive([5, 2, 9, 10]); // -> 26
sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1
sumNumbersRecursive([]); // -> 0
sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]); // -> 1001
sumNumbersRecursive([700, 70, 7]); // -> 777

//Solution I

const sumNumbersRecursive = (numbers) => {
//set up base case to exit out of the recursive function
  if(numbers.length === 0) return 0;
//set up recrusive step that adds the first element of the array and adds it to the rest of the elements of the array.
  return numbers[0]+sumNumbersRecursive(numbers.slice(1))
};

module.exports = {
  sumNumbersRecursive,
};

//arr -> of nums, array can be empty, nums can be negative, arr wont be null or undefined, only an array coming in

//num -> the sum of all element nums in the array. 

sumNumbersRecursive([5, 2, 9, 10]); // -> 26
sumNumbersRecursive([1, -1, 1, -1, 1, -1, 1]); // -> 1
sumNumbersRecursive([]); // -> 0
sumNumbersRecursive([1000, 0, 0, 0, 0, 0, 1]); // -> 1001
sumNumbersRecursive([700, 70, 7]); // -> 777
