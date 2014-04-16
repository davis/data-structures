var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //declare endOfQueue variable
  var endOfQueue = 0;
  //declare front of the queue item
  var frontOfQueue = 0;
  // Implement the methods below

  instance.enqueue = function(value){
    //set storage[size] to value
    storage[endOfQueue] = value;
    endOfQueue++;
  };

  instance.dequeue = function(){
    if(endOfQueue !== frontOfQueue) {
      //find first item
      //cache first item
      var item = storage[frontOfQueue];
      //delete first item
      delete storage[frontOfQueue];
      //increment the frontOfQueue index
      frontOfQueue++;
      //return cached item
      return item;
    }
  };

  instance.size = function(){
    //return size
    return endOfQueue - frontOfQueue;
  };

  return instance;
};
