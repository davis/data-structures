var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this.storageSize = 0; // Hint: set an initial value here

};

Stack.prototype.stackMethods = {};

// Implement the methods below
Stack.prototype.push = function(value){
  // push value into the storage object
  this.storage[this.storageSize] = value;
  // increment size
  this.storageSize++;
};

Stack.prototype.pop = function(){
  // decrement size
  if(this.storageSize) {
    this.storageSize--;
  }
  // cache last item
  var item = this.storage[this.storageSize];
  // delete last item
  delete this.storage[this.storageSize];
  // return cached last item
  return item;
};

Stack.prototype.size = function(){
  // returns size
  return this.storageSize;
};

var stack = new Stack();
