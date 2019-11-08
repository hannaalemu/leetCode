class BinaryTree {
    constructor() {
      this.root = null;
    }
  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  let testTree = new BinaryTree();
  
  testTree.root = new Node(10);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  
  testTree.root.left = three;
  testTree.root.right = two;
  
  three.left = four;
  three.right = five;
  
  two.left = six;
  two.right = seven;
  
  
  const mirrorTree = function(root) {
    if(!root) {
      return null;
    }
    if(!root.left && !root.right) {
      return root;
    }
    if(!root.left) {
      root.left = root.right;
    }
    if(!root.right) {
      root.right = root.left;
    }
    else {
      let temp = root.right;
      root.right = root.left;
      root.left = temp;
  
      return mirrorTree(root.left) && mirrorTree(root.right);
    }
  }
  
  console.log(testTree.root);
  mirrorTree(testTree.root);
  console.log(testTree.root);