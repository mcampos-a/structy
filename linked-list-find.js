//Structy 
//Exercise 5/17: linked list find
//Linked Lists

// Write a function, linkedListFind, that takes in the head of a linked list and a target value. 
// The function should return a boolean indicating whether or not the linked list contains the target.

//Solution I

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
//set up a variable to check if target is in the linked list
  let check = false
//set up the head as the current value
  let current = head
//loop through the linked list and check if current === our target 
  while(current !== null){
//if so update our check variable to true
    if(current.val === target){
      check = true
    }
//reasign current to current.next
    current = current.next
  }
//return check variable
  return check
};

module.exports = {
  linkedListFind,
};


//head -> wont be null or undefined, wont be emtpy, will always be valid head
//str -> wont be null or undefined, wont be epmty, can be other data type

//boolean -> if linked list includes target === true

//Test#1
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d


linkedListFind(a, "d"); // true

//Test#2
// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

linkedListFind(a, "q"); // false

//Test#3
// const node1 = new Node("jason");
// const node2 = new Node("leneli");

// node1.next = node2;

// jason -> leneli

linkedListFind(node1, "jason"); // true


