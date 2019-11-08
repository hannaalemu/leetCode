class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  }
  
  const kthFromEnd = function(k, ll) {
    let current = ll.head;
  
   while(k > 0) {
     current = current.next;
     k--;
   }
    var pointer = ll.head;
    while(current) {
    current = current.next;
    pointer = pointer.next;
    }
  return pointer;
  }
  
  let ll = new LinkedList();
  
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  
  ll.head = one;
  one.next = two;
  two.next = three;
  three.next = four;
  four.next = five;
  
  kthFromEnd(4, ll)