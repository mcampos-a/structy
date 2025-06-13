//Structy 
//Exercise 6/17: reverse list
//Linked Lists

// Write a function, reverseList, that takes in the head of a linked list as an argument. 
// The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

//Solution I

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = (head, prev = null) => {
//set up our base case
  if(head === null) return prev
//assign a next variable to the node next the head
  const next = head.next
//point the next of the head to the previous node
  head.next = prev
//set up the recrusive step
  return reverseList(next, head)
};

module.exports = {
  reverseList,
};

//head -> first node in the linked list, It could be null, but if we have a node it wont be empty, the node will have str in them

//str -> the new head after our function reverses the order of the node. Essentially the last node of the original linked list

//EX1
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

reverseList(a); // f -> e -> d -> c -> b -> a

//EX2
const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

reverseList(x); // y -> x


//EX3
const p = new Node("p");

// p

reverseList(p); // p

// const reverseList = (head, prev = null) => {
//   if (head === null) return prev;
//   const next = head.next;
//   head.next = prev;
//   return reverseList(next, head);
// };