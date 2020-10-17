class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val)
    if(!this.root){
      this.root = newNode;
      return this
    }
    let current = this.root

    while (current){
      if(newNode.val < current.val){
        if(current.left === null){
          current.left = newNode
          break;
        } else {
          current = current.left
        }
      } else {
        if (current.right === null){
          current.right = newNode
          break;
        } else {

          current = current.right
        }
      }
    }
    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

   /**
    * 15 20 10 12
    *    15
    * 10   20
    *  12
   */

  insertRecursively(val) {
    const newNode = new Node(val)

    if(!this.root){
      this.root = newNode
      return this
      
    } 

    function insertHelper(node){
      
      if(node.val > newNode.val) {
        if(!node.left){
          node.left = newNode
          return;

        } else {
          node = node.left
        }
      } else {

          if(!node.right){
            node.right = newNode
            return;

          } else {
          node = node.right
        }
      }

      insertHelper(node);
    }

    insertHelper(this.root)

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let found;
    let current = this.root
    while(current){
      if(current.val > val){
        current = current.left
      } else if (current.val < val) {
        current = current.right;
      } else {
        found = current;
        break;
      }
    }
    return found;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let found;
    function findHelper(currentNode){
      if(!currentNode) return;

      if(currentNode.val > val){
       return  findHelper(currentNode.left)
      } else if (currentNode.val < val){
        return findHelper(currentNode.right)
      } else {
        return currentNode
      }
    } 

    found = findHelper(this.root)
    return found;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];

    function dfsHelper(currentNode){
      visited.push(currentNode.val)
      if(currentNode.left !== null) dfsHelper(currentNode.left)
      if(currentNode.right !== null) dfsHelper(currentNode.right)
    } 

    dfsHelper(this.root)

    return visited
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];

    function dfsHelper(currentNode){
      if(currentNode.left !== null) dfsHelper(currentNode.left)
      visited.push(currentNode.val)
      if(currentNode.right !== null) dfsHelper(currentNode.right)
    }
    dfsHelper(this.root)
    return visited
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];

    function dfsHelper(currentNode){
      if(currentNode.left !=null) dfsHelper(currentNode.left)
      if(currentNode.right != null) dfsHelper(currentNode.right)
      visited.push(currentNode.val)
    }

    dfsHelper(this.root)
    return visited
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

   /**
 *          15
 *       10   20
 *      1  12    50
 *       5
 *  
 */


  bfs() {
    const visited = []
    const bfsQueue = [this.root]
    
    while(bfsQueue.length){
      const current = bfsQueue.shift();

      visited.push(current.val)

      if(current.left) bfsQueue.push(current.left)
      if(current.right) bfsQueue.push(current.right)
    }

    return visited
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
