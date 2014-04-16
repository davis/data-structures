var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
    // push value into the storage object
    storage[size] = value;
    // increment size
    size++;
  };

  instance.pop = function(){
    // decrement size
    size && size--;
    // cache last item
    var item = storage[size];
    // delete last item
    delete storage[size];
    // return cached last item
    return item;
  };

  instance.size = function(){
    // returns size
    return size;
  };

  return instance;
};
