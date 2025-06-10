//Structy 
//Exercise 4/17: sum list
//Linked Lists

// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. 
// The function should return the total sum of all values in the linked list.

//Solution I

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sumList = (head) => {
//set up a variable to add up the total values of the linked list
  let result = 0
//set up the head as the current value
  let current = head
//set up the ending condition
//loop through the list and and add each num to the result variable
  while (current !== null){
    result += current.val
    current = current.next
//within the loop set the new current to current.next
  }
//return the result variable 
  return result
};

module.exports = {
  sumList,
};




//params 
//num -> head num coming in. Can be empty, it wont be null or undefined, can assume that a num is always coming in. We take the head of a linked list

//Return
//num -> sum of all values in the linked list.

//Example
//Ex1
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

sumList(a); // 19

//EX2
const x = new Node(38);
const y = new Node(4);

x.next = y;

// 38 -> 4

sumList(x); // 42

//EX3
sumList(null); // 0
