var BinarySearchTree = function(value){
  // instantiate tree object
  // give value property to object
  this._value = value;
  // give left & right property to object
  this._left = null;
  this._right = null;
};

// create insert node method
BinarySearchTree.prototype.insert = function(newItem){
  var left = this._left;
  var right = this._right;
  var bst = new BinarySearchTree(newItem);  // instantiate new bst for newItem

  if(bst._value < this._value) {    // check if bst's value is less than the current node's value.
    if(left === null) {             // check if there is a left.
      left = bst;                   // if not, set bst as left
    } else {                        // if there is a left,
      left.insert(bst._value);      // recurse on left.
    }
  } else if(bst._value > this._value){
    this._right = bst;
  }
};
// create contains method
BinarySearchTree.prototype.contains = function(target) {

};
// create depthFirstLog method
BinarySearchTree.prototype.depthFirstLog = function() {};

