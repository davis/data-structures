var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // check storage is defined
  // if not, create storage as an object
  this._storage = this._storage || {};
  // add item to storage
  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  // check if storage contains property
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  // remove item from storage
  delete this._storage[item];
};
