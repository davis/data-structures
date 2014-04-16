var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  //
  var instance = {};

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.storageSize = 0; // Hint: set an initial value here

  //extend instance with stack methods
  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

// Implement the methods below
stackMethods.push = function(value){
  // push value into the storage object
  this.storage[this.storageSize] = value;
  // increment size
  this.storageSize++;
};

stackMethods.pop = function(){
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

stackMethods.size = function(){
  // returns size
  return this.storageSize;
};
