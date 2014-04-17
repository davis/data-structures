var each = function(obj, iterator, context) {
  if(Array.isArray(obj)) {
    for (var i = 0, length = obj.length; i < length; i++) {
      iterator.call(context, obj[i], i, obj);
    }
  } else {
    var keys = Object.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      iterator.call(context, obj[keys[i]], keys[i], obj);
    }
  }
  return obj;
};

var extend = function(obj) {
    each(Array.prototype.slice.call(arguments, 1), function(source) {
      if (source) {
        for (var prop in source) {
          obj[prop] = source[prop];
        }
      }
    });
    return obj;
  };

var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  //give newTree access to tree methods
  extend(newTree, treeMethods);
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



























