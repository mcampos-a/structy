//Structy 
//Exercise 5/12: intersection
//Hashing 

// Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

intersection([4,2,1,6], [3,6,9,2,10]); // -> [2,6]
intersection([2,4,6], [4,2]); // -> [2,4]
intersection([4,2,1], [1,2,4,6]); // -> [1,2,4]
intersection([0,1,2], [10,11]); // -> []

//Solution I

const intersection = (a, b) => {
//set up an empty array to store elements that intersect in both arrays
  let intersection = []
//set up an empty hash map to store the elements as keys in a set
  let set = {}
//loop through array a and populate the set
  a.forEach(el=> set[el]=null)
//now loop through second array and check if each element is in the map
//if so push it to the result array
  b.forEach(el=>{
    if(el in set){
      intersection.push(el)
    }
  })
//return result array
  return intersection
};

module.exports = {
  intersection,
};

//parameters
//arr1 and arr2 -> of nums, no dups in each arr, arrays wont be empty, arrays wont be null or undefined, arrays never empty

//return
//arr -> of nums shared between the two input arrays, explude elements that are not shared

//example
//console.log(intersection([2,4,6], [4,2]), [2,4])
//console.log(intersection([0,1,2], [10,11]), [])