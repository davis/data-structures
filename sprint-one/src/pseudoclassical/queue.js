var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  // Use an object with numeric keys to store values
  this.storage = {};
  //declare endOfQueue variable
  this.endOfQueue = 0;
  //declare front of the queue item
  this.frontOfQueue = 0;
};

Queue.prototype.enqueue = function(value){
    //set storage[size] to value
    this.storage[this.endOfQueue] = value;
    this.endOfQueue++;
  };

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  //return size
  return this.endOfQueue - this.frontOfQueue;
};

var queue = new Queue();
