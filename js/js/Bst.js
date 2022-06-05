class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data);
    if (this.root == null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (root.data > node.data) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  inOrder(root) {
    if (root != null) {
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  }
  preOrder(root) {
    if (root != null) {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root != null) {
      this.postOrder(root.left);
      this.postOrder(root.left);
      console.log(root.data);
    }
  }
}

const bst = new BST();

bst.insert(10);
bst.insert(20);
bst.insert(5);
console.log(bst);
bst.inOrder(bst.root);
