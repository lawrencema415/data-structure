// 3 kind of Binary Trees

// Full Tree - each node has no children or a node has two children
           //   *
           //  / \
           // *   *
           //    / \
           //   *   *


// Complete Tree - when we fill out the node, top to bottom, left to right
// if u add extra node it's no longer complete
          //       *
          //      / \
          //     *   *
          //    / \ / \
          //   *  * *  *
          //  / \
          // *  *

// Perfect Tree - all leaves are on same level, all nodes have exactly 2 children
       //      *
       //     / \
       //    *   *
       //  /  \ / \
       // *   * *  *
       // /\  /\/\ /\
       // **  **** **

// Traversal
// l - left  n - node r - right           run time o(n) linear since we're teaching all of the nodes
// Preorder  n l r
// Inorder l n r
// Postorder l r n

// binary search tree, Inorder will print in order
// A tree is a collection of node connected by some edges.
// A tree is a non linear data structure. A binary search tree is a binary
// tree which nodes have the lesser value stored on the left while the nodes with
// higher value are stored at the right

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if(this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root,data);
  }

  // Need to redo
  removeNode(node, key) {
    if(node === null) {
      return null;
    } else if ( key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if ( key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if(node.left === null && node.right === null ) {
        node = null;
        return node;
      }
      if(node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right);
      return node;
    }
  }

  // findMinNode(), finds the minimum node in the tree
  findMinNode(node) {
    if(node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }
  // getRootNode()
  getRootNode() {
    return this.root;
  }
  // inorder(node) lnr
  inorder(node) {
    if(node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  // preorder(node) nlr
  preorder(node) {
    if(node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  // postorder(node) lrn ?
  postorder(node) {
    if(node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  // search(node,data)
  search(node, data) {
    if(node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data)
    } else if ( data > node.data) {
      return this.search(node.right,  data)
    } else {
      return node;
    }
  }
}


let BST = new BinarySearchTree();
BST.insert(7);
BST.insert(5);
BST.insert(12);
BST.insert(8);
BST.insert(19);
BST.insert(24);
BST.insert(22);
BST.insert(1);
BST.insert(6);
BST.insert(37);
console.log(BST);
let root = BST.getRootNode();
// BST.inorder(root);
// BST.remove(7);
// BST.remove(8);
// BST.preorder(root);
BST.postorder(root);
