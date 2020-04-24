// Given a Linked List, sort the linked list using merge sort. 
// You will need your linked list class from previous lesson to 
// create the list and use all of its supplemental functions to 
// solve this problem.

// Setup for the algorithm
const { LinkedList, _Node } = require('../lib/LinkedList');

const linkedList = new LinkedList();

let str = `89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5`;
let dataSet = str
  .split(' ')
  .map(int => linkedList.insertFirst(parseInt(int)));

// console.log(linkedList);
// console.log(linkedList.iterate());

const mergeSort = (head) => {
  if (head === null || head.next === null) {
    return head;
  }
  
  let prev = null;
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  // close first half list
  prev.next = null;
  
  const l1 = mergeSort(head);
  const l2 = mergeSort(slow);

  const _merge = (l1, l2) => {
    const head = new _Node();
    let current = head;
   
    while ( l1 !== null && l2 !== null ) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
    current.next = ( l1 === null ) ? l2 : l1;
    return head.next;
  };

  return _merge(l1, l2);
};


let sortedList = mergeSort(linkedList.head);
linkedList.head = sortedList;
console.log(linkedList.iterate());