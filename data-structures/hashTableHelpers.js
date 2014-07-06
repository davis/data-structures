/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit){

  this._storage = [];
  this._checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };
};

LimitedArray.prototype.get = function(index){
  this._checkLimit(index);
  return this._storage[index];
};
LimitedArray.prototype.set = function(index, value){
  this._checkLimit(index);
  this._storage[index] = value;
};
LimitedArray.prototype.each = function(callback){
  for(var i = 0; i < this._storage.length; i++){
    callback(this._storage[i], i, this._storage);
  }
};



// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
