var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //get the hash for input
  var i = getIndexBelowMaxForKey(k, this._limit);
  //store value at hash
  this._storage.set(i, v);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //return value at hash
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  //remove value at hash
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};

