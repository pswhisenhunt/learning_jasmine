var app = require('./../app.js');

describe('baisc math', function() {
  it('#sum()', function() {
    expect(app.sum(1,2)).toEqual(3);
  });
  it('#sum()', function() {
    expect(app.sum(1,1)).toEqual(2);
  });
  it('#multipy()', function() {
    expect(app.multiply(10, 2)).toEqual(20);
  });
  it('#multiply()', function() {
    expect(app.multiply(4,1)).toEqual(4);
  });
  it('#divide()', function() {
    expect(app.divide(8,4)).toEqual(2);
  });
  it('#subtract', function() {
    expect(app.subtract(8,6)).toEqual(2);
  });
});

describe('more math', function() {
  it('#remainder()', function() {
    expect(app.remainder(9,2)).toEqual(1);
  });
  it('#isPrime()', function() {
    expect(app.isPrime(5)).toEqual('prime');
  });
});
