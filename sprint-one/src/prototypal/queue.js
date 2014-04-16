var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);
  // Use an object with numeric keys to store values
  instance.storage = {};
  //declare endOfQueue variable
  instance.endOfQueue = 0;
  //declare front of the queue item
  instance.frontOfQueue = 0;
  // Implement the methods below
  //extend makeQueue with queueMethods
  return instance;
};


var queueMethods = {};

queueMethods.enqueue = function(value){
    //set storage[size] to value
    this.storage[this.endOfQueue] = value;
    this.endOfQueue++;
  };

queueMethods.dequeue = function(){
  if(this.endOfQueue !== this.frontOfQueue) {
    //find first item
    //cache first item
    var item = this.storage[this.frontOfQueue];
    //delete first item
    delete this.storage[this.frontOfQueue];
    //increment the frontOfQueue index
    this.frontOfQueue++;
    //return cached item
    return item;
  }
};

queueMethods.size = function(){
  //return size
  return this.endOfQueue - this.frontOfQueue;
};
