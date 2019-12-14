//Hanna - this function is the level order traversal of a binary tree. It returns an array of arrays with values on each level of the binary tree.

const levelOrder = function(root) {
    if (root === null) return [];
    
    let result = [];
    let queue = [root];
    
    while(queue.length > 0) {
        let n = queue.length;
        let level = [];
        
        for (var i = 0; i < n; i ++) {
            let node = queue.pop();
            level.push(node.value);
            
            if (node.left != null) queue.unshift(node.left);
            if (node.right != null) queue.unshift(node.right);
        }
        
        result.push(level);
    }
    
    return result;
};

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

levelOrder(testTree.root);

//Hanna ---------------- depth first search -----

const depthFirst = function(root) {
  if(root == null) {
    return;
  }

  else {
    console.log(root);
    root.visited = true;

  }
}


