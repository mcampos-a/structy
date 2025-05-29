//Structy 
//Exercise 7/12: is prime
//Introduction 

// Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

// isPrime(2); // -> true
// isPrime(3); // -> true
// isPrime(4); // -> false
// isPrime(5); // -> true
// isPrime(6); // -> false


//Solution I

const isPrime = (n) => {
//check for instances where n will be less than 2
  if(n<2) return false
  //loop between 2 and the square root of n
  for(let i=2; i<=Math.sqrt(n); i++){
   //if n is divisible by any number without remender we know it is not a prime num
   if(n%i === 0){
      return false
   } 
  }
  //if the input n has no nums that can be divided into it then we know the input is a prime number
  return true
};

module.exports = {
  isPrime,
};



