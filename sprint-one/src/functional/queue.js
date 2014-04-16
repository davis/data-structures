var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //declare size variable
  var size =0;
  // Implement the methods below

  instance.enqueue = function(value){
    //set storage[size] to value
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
  };

  instance.size = function(){
    //return size
    return size;
  };

  return instance;
};
