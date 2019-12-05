//Hanna - this is a from scratch inplementation of the three types of Binary tree traversals. 

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  }
  
  let test = new BinaryTree();
  
  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  let six = new Node(6);
  let seven = new Node(7);
  
  
  test.root = one;
  
  one.left = two;
  one.right = three;
  
  two.left = four;
  two.right = five;
  
  three.left = six;
  three.right = seven;
  
//--------------------------------------Inorder traversal-----------------
//Hanna - most common traversal!! We visit Left---Root---Right
const inorder = function(root){
    if(root != null) {
      inorder(root.left);
      console.log(root)
      inorder(root.right)
    }
  }
   



//---------------------------------------PreOrder traversal----   Root---Left----Right    -----------
const preorder = function(root){
    if(root) {
      console.log(root);
      preorder(root.left);
      preorder(root.right)
    }
  }
  
//----------------------------------------PostOrder traversal ---- Left -- Right --- Root -----------

const postorder = function(root) {
    if(root) {
      postorder(root.left);
      postorder(root.right);
      console.log(root);
    }
  }
  