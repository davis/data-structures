var HashTable = function() {
  this._limit = 8;
  this._currentSize = 0;
  this._storage = new LimitedArray(this._limit);
  this._minSpaceUsage = 0.25;
  this._maxSpaceUsage = 0.75;
};

// HashTable.prototype.doubleOrHalve = function() {
//   debugger;
//   var hashtable = this;
//   var oldStorage = this._storage;
//   var oldLimit = this._limit;
//   var newLimit;
//   // check if size is above or below ranges
//   // if it's above, double the size
//   if(this._currentSize <= (this._limit * this._minSpaceUsage)) {
//     console.log('beforelimit:' + this._limit + ' beforecurrentSize:' + this._currentSize);
//     newLimit = oldLimit * 2;
//     // this._currentSize = 0;
//     console.log('afterlimit: ', this._limit);
//   } else if(this._currentSize >= (this._limit * this._maxSpaceUsage)) {
//   // if it's below, halve the size
//     newLimit = oldLimit / 2;
//     // this._currentSize = 0;
//   }
//   if(newLimit !== oldLimit) {
//     // this._currentSize = 0;
//   }
// };

HashTable.prototype.resize = function(limit) {
  var self = this;
  this._currentSize = 0;
  this._limit = limit;
  var oldStorage = this._storage;
  this._storage = new LimitedArray(limit);
  oldStorage.each(function(arrayOfTuples) {
    var key;
    var value;
    if(arrayOfTuples) {
      for(var i = 0; i < arrayOfTuples.length; i++) {
        key = arrayOfTuples[i][0];
        value = arrayOfTuples[i][1];
        self.insert(key, value);
      }
    }
  });
};

HashTable.prototype.insert = function(k, v) {
  var bucket;
  // console.log(k, v);
  //check if hashtable needs to be expanded
  //get the hash for input
  var i = getIndexBelowMaxForKey(k, this._limit);
  //store key-value pair as a tuple at hash
  // collision case: if index is occupied then add second tuple to the same index
    // console.log("before" + this._storage.get(i));
  bucket = this._storage.get(i);
  if(bucket) {
    if(bucket.length) {
      bucket.push([k,v]);
      this._storage.set(i, bucket);
      // console.log("after" + this._storage.get(i));
    }
  } else {
    this._storage.set(i, [[k, v]]);
  }
  // increment size control counter
  this._currentSize++;
  // console.log('storagelength: ', this._storage.get(i).length)
  // console.log('current size in insert ', this._currentSize);
  if(this._currentSize > this._limit * this._maxSpaceUsage) {
    this.resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  // go to the index of the hashtable, check if there are more than 1 tuples
  for(var j = 0; j < bucket.length; j++) {
    if(bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  //remove value at hash
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  // loop through array of tuples to delete correct one using key
  for(var j = 0; j < bucket.length; j++) {
  // delete tuple
    if(bucket[j][0] === k) {
      bucket.splice(j, 1);
    }
  }
  // decrement size control counter
  this._currentSize--;
  if(this._currentSize < this._limit * this._minSpaceUsage) {
    this.resize(this._limit / 2);
  }
};

