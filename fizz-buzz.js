//Structy 
//Exercise 11/12: fizz buzz
//Introduction 

// Write a function, fizzBuzz, that takes in a number n as an argument. The function should return an array containing numbers from 1 to n, replacing certain numbers according to the following rules:

// if the number is divisible by 3, make the element "fizz"
// if the number is divisible by 5, make the element "buzz"
// if the number is divisible by 3 and 5, make the element "fizzbuzz"

//Solution I

const fizzBuzz = (n) => {
//set up empty array to push our collection of elements
  let result = []
//loop through numbers starting at 1 and ending at 11
  for(let i = 1; i<=n; i++){
//if n % 3 == 0 && n % 5 == 0 repalce n with fizzBuzz
  if(i % 3 == 0 && i % 5 == 0){
    result.push("fizzbuzz")
//if n % 3 == 0 -> replace n with "fizz"
  }else if(i % 3 == 0){
    result.push("fizz")
//if n % 5 == 0 -> replace n with "buzz"
  }else if(i % 5 == 0){
    result.push("buzz")
//if none of our conditions are met return the number
  }else{
    result.push(i)
   }
  }
  return result

//return result array
};

module.exports = {
  fizzBuzz,
};


//num -> num wont be empty, it wont be null or undefined, only always getting num
//We will be returning an arr -> of nums

  //if n % 3 == 0 -> replace n with "fizz"
  //if n % 5 == 0 -> replace n with "buzz"
  //if n % 3 == 0 && n % 5 == 0 repalce n with fizzBuzz

//console.log(fizzBuzz(11), [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11])


