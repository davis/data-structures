var HashTable = function() {
  this._limit = 8;
  this._currentSize = 0;
  this._storage = new LimitedArray(this._limit);
  this._minSpaceUsage = 0.25;
  this._maxSpaceUsage = 0.75;
};

HashTable.prototype.capacityControl = function() {
  // if the storage size reaches 75% of the limit, double storage
  if(this._currentSize >= this._limit * this._maxSpaceUsage) {
    // cache storage
    var tmp = this._storage;
    // increase limit
    this._limit *= 2;
    // create new larger hashtable
    this._storage = new LimitedArray(this._limit);
    console.log(this._storage.length);
    // for each element in storage, call insert method on bigger hashtable
    tmp.each(function(value, key) {
      this._storage.insert(value, key);
    });
  }
  // if the storage size reaches 25% of the limit, halve storage
  console.log();
};


HashTable.prototype.insert = function(k, v) {
  //check if hashtable needs to be expanded
  this.capacityControl();
  //get the hash for input
  var i = getIndexBelowMaxForKey(k, this._limit);
  //store key-value pair as a tuple at hash
  // collision case: if index is occupied then add second tuple to the same index
    // console.log("before" + this._storage.get(i));
  if(this._storage.get(i)) {
    this._storage.set(this._storage.get(i).push([k,v]));
    // console.log("after" + this._storage.get(i));
  } else {
    this._storage.set(i, [[k, v]]);
  }
  // increment size control counter
  this._currentSize++;
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  // go to the index of the hashtable, check if there are more than 1 tuples
  for(var j = 0; j < this._storage.get(i).length; j++) {
    if(this._storage.get(i)[j][0] === k) {
      return this._storage.get(i)[j][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  //remove value at hash
  var i = getIndexBelowMaxForKey(k, this._limit);
  // loop through array of tuples to delete correct one using key
  for(var j = 0; j < this._storage.get(i).length; j++) {
  // delete tuple
    if(this._storage.get(i)[j][0] === k) {
      if(this._storage.get(i).length > 1) {
        this._storage.get(i).splice(j, 1);
      } else {
        this._storage.get(i)[0][1] = null;
      }
    }
  }
  // decrement size control counter
  this._currentSize--;
};

