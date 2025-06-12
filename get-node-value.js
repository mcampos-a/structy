//Structy 
//Exercise 5/17: Get Node Value
//Linked Lists

// Write a function, getNodeValue, that takes in the head of a linked list and an index. 
// The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

//Solution I

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
//set up a variable tracking the index count
  let count = 0
//set the head to a current variable
  let current = head
//loop through the linked list and stop when current.next === null
  while(current != null){
//loop for when count === index and return the current value at that index
    if(count===index) return current.val
//then reassign current to current.next to move to the following node
    current = current.next
//if count does not equal index, then add + 1 to count
    count++
  }
//now if we exist the loop and we have not retured the count it means that the index provided is not in the linked list and we met our null stopping condition
//so we will return null
  return null

};

module.exports = {
  getNodeValue,
};

//head -> wont be null or undefined, head will not be empty, the values of the nodes will be strings.
//index -> wont be null or undefined, not empty, only nums coming in for the index.

//value of node -> str, at the index provided.

//EX#1
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

getNodeValue(a, 2); // 'c'
