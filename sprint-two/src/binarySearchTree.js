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
  console.dir(newBST);

  // debugger;

  if(newValue < this.value) {    // check if bst's value is less than the current node's value.
    if(this.left === null) {             // check if there is a left.
      this.left = newBST;                   // if not, set bst as left
    } else {                        // if there is a left,
      this.left.insert(newValue);      // recurse on left.
    }
  } else if(newValue > this.value) {
    if(this.right === null) {
      this.right = newBST;
    } else {
      this.right.insert(newValue);
    }
  }
};
// create contains method
BinarySearchTree.prototype.contains = function(target) {

};
// create depthFirstLog method
BinarySearchTree.prototype.depthFirstLog = function() {};

