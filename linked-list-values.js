//Structy 
//Exercise 3/17: linked list values
//Linked Lists

// Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
// The function should return an array containing all values of the nodes in the linked list.

// Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive! -AZ

//Solution I

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

//   const linkedListValues = (head) => {
// //set up an emtpy array to store our node values
//     let result = []
//     _linkedLisValues(head, result)
// //return the result array with all the nodes from the liked list
//     return result
//   }

// //set up helper recursive function to push values from the linked list to the result function array

//   const _linkedLisValues = (head, result) => {
// //set up our base case to get us out of recrussion
//     if(head === null) return;
// //push each current node value to an array
//     result.push(head.val)
// //set up our recrusive step by calling the function and setting the parameter to the head.next
//     _linkedLisValues(head.next, result)

//   }

// module.exports = {
//   linkedListValues,
// };

//Solution II

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

  const linkedListValues = (head) => {
  //set up an empty array to store the node values we will print out
    let result = []
  //set the head t`o current value
    let current = head
  //use a loop to iterate through the linked list
  //set up the stopping condition
    while (current !== null){
  //push the current value to the result array
      result.push(current.val)
  //reassign the current value to current.next
      current = current.next
    }
  //outside of the loop return the result array
    return result

  }


module.exports = {
  linkedListValues,
};



//params 
//str -> it will take the head value, can be null or undefined, will always be a str, it wont be empty

//Return
//arr -> w/ all nodes of the linked list

//Example

//Test#0
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]

//Test#1
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

linkedListValues(x); // -> [ 'x', 'y' ]

//Test#2
const q = new Node("q");

// q

linkedListValues(q); // -> [ 'q' ]
