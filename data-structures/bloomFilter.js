// very simple bloom filter where k = 3
// where k is number of hashing functions and m is number of bits
function BloomFilter(m) {
  this.storage = {};
  this.m = m;
}

// generate 3 hashes, store 'true' at each hash
BloomFilter.prototype.insert = function(string) {
  for(var i in this.hashingFunctions) {
    var index = JSON.stringify(this.hashingFunctions[i](string, this.m));
    this.storage[index] = true;
  }
};

// we make sure all 3 hashes are true in our storage object
// this may lead to false positives, which is an inherent quality of bloom filters
BloomFilter.prototype.contains = function(string) {
  for(var i in this.hashingFunctions) {
    var index = JSON.stringify(this.hashingFunctions[i](string, this.m));
    if(!this.storage[index]) {
      return false;
    }
  }
  return true;
};

// basic hashing functions
BloomFilter.prototype.hashingFunctions = {
  hash1: function(str, m) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % m;
  },
  hash2: function(str, m) {
    var hash = 5381;
    for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return hash % m;
  },
  hash3: function(str, m) {
    var hash = 0;
    for(i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = char + (hash << 6) + (hash << 16) - hash;
    }
    return hash % m;
  }
};