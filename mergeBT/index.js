// Merge two binary trees
// If both nodes exist, sum them both into one. 
// if only one exists and the other is null, return that one.
// If both are null, return null.


class BinaryTree {
    constructor() {
      this.root = null;
    }
  }
  
  class Node {
    constructor(val) {
      this.val = val;
      this.left = this.right = null;
    }
  }
  
  
  function mergeTrees(r1,r2) {
    if(!r1) {
      return r2;
    }
    if(!r2) {
      return r1;
    }
  
        r1.val = r1.val += r2.val; 
        r1.left = mergeTrees(r1.left, r2.left);
        r1.right = mergeTrees(r1.right, r2.right);
  
    return r1;
  }
  
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  
  let test = new BinaryTree();
  test.root = one;
  one.left = two;
  one.right = three;
  
  let test2 = new BinaryTree();
  test2.root = four;
  four.left = five
  four.right = six;
  
  console.log(mergeTrees(test.root, test2.root));

