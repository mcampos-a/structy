//Structy 
//Exercise 7/17: zipper list
//Linked Lists

// Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes.
// If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

//Solution I

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// const zipperLists = (head1, head2) => {
// //set up a variable tail to track the head of the first list
//   let tail = head1
// //set up a variable to track list1 current and one for list2 current
//     let current1 = head1.next
//     let current2 = head2
  
// //set up a counter variable to help us track which lists node has been zipped
//   let counter = 0
// //loop through the lists and end the loop when current1 === null or current2 === null
//   while(current1 !== null && current2 !== null){
// //check if the current variable is odd or even
//     if(counter % 2 == 0){
// //if even connect our tail variable to the current node of list 2
//       tail.next = current2
// //then move the current list 2 node to the next poisiton
//       current2 =  current2.next
//     }else{
// //if counter is odd connect the tail vairbale to the current node of list 1
//       tail.next = current1
// //then move the current list 1 to the next position
//       current1 = current1.next
//     }
// //Now we move the tail variable to its next position
//     tail = tail.next
// //at the end of the loop we add one to the counter to alternate grabbing nodes between list 1 and list 2
//     counter+= 1
//   }
// //for our edge case when our lists are different lengths we will check if either current node is equal to null if any is so, we connect the remainding list to the tail vraibale. 
// //thus bringing along the remainder of that linked list
//   if(current1 !== null) tail.next = current1
//   if(current2 !== null) tail.next = current2
// //Finally we return the head of the new linked list. Which is the head in which we started to join lists.
// return head1
// };

//recrusive solution

const zipperLists = (head1, head2) => {
  //base cases
  if (head1 === null && head2 === null) return null
  if(head1 === null) return head2
  if(head2 === null) return head1


  //recursive code
  const next1 = head1.next
  const next2 = head2.next
  head1.next = head2

  head2.next = zipperLists(next1, next2)

  return head1
}

module.exports = {
  zipperLists,
};


