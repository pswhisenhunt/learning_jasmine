module.exports = {
  sum: function(a,b) {
    return a + b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  divide: function(a,b) {
    return a/b;
  },
  remainder: function(a,b) {
    return a % b;
  },
  isPrime: function(num) {
    if(num < 2) {
      return 'not prime';
    }
    for(var i = 2; i < num; i++) {
      if(num % i === 0) {
        return 'not prime';
      }
    }
    return 'prime';
  }
};
