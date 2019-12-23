//Write a program to find the node at which the intersection of two singly linked lists begins.




var getIntersectionNode = function(headA, headB) {
    let hash = new Map();
 
    while(headA) {
      hash.set(headA);
      headA = headA.next;
    }
    while(headB) {
      if(hash.has(headB) === true) {
        return headB;
      }
      headB = headB.next;
    }
 
    return null;
 };