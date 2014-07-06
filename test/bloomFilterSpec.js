var assert = chai.assert;

describe("bloomFilter", function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter(100);
    bloomFilter.insert('dog');
  });

  it("should have methods", function() {
    expect(bloomFilter.insert).to.be.a('function');
    expect(bloomFilter.contains).to.be.a('function');
  });

  it("should find 'dog'", function() {
    expect(bloomFilter.contains('dog')).to.be.true;
  });

  it("should not find 'cat'", function() {
    expect(bloomFilter.contains('cat')).to.be.false;
  });
});
