var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  //give newTree access to tree methods
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  //if this trees children is undefined, instantiate empty array for this.children
  if (!this.children) {
    this.children = [];
  }
  //push a new child to calling tree's children
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
// default return false
  var result = false;
// if the tree node contains the target return true
  if (this.value === target) {
    result = true;
  }
// else if tree node has children recurse contains on children
  else if (this.children) {
    for(var i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(target)) {
        result = true;
      }
    }
  }
  return result;
};



























