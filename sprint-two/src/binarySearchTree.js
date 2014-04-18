var BinarySearchTree = function(value){
  // instantiate tree object
  // give value property to object
  this.value = value;
  // give left & right property to object
  this.left = null;
  this.right = null;
};

// create insert node method
BinarySearchTree.prototype.insert = function(newValue){

  var newBST = new BinarySearchTree(newValue);  // instantiate new bst for newItem

  if(newValue < this.value) {             // check if bst's value is less than the current node's value.
    if(this.left) {              // check if there is a left.
      this.left.insert(newValue);         // recurse on left.
    } else {                              // if there is a left,
      this.left = newBST;                 // if not, set bst as left
    }
  } else if(newValue > this.value) {      // can we refactor these 2 into 1 block?
    if(this.right) {
      this.right.insert(newValue);
    } else {
      this.right = newBST;
    }
  }
};
// contains(target): this function returns true if BST contains target, else returns false
BinarySearchTree.prototype.contains = function(target) {
  // compare current item with target value
  // if equal, return true
  if(target === this.value) {
    return true;
  // if less and there is a left, recurse target against left
  } else if (target < this.value && this.left) {
    return this.left.contains(target);
  // if greater and there is a right, recurse target against right
  } else if (target > this.value && this.right) {
    return this.right.contains(target);
  // else return false;
  } else {
    return false;
  }
};
//  depthFirstLog takes a method and applies the callback to every item in the BST
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback.call(this);
  if(this.left) {
    // BinarySearchTree.prototype.depthFirstLog.call(this.left, callback);
    this.left.depthFirstLog(callback);
  }
  if(this.right) {
    // BinarySearchTree.prototype.depthFirstLog.call(this.right, callback);
    this.right.depthFirstLog(callback);
  }
};
































