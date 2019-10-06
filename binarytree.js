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
