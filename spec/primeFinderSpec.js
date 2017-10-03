var PrimeFinder = require('../src/primeFinder').PrimeFinder;

describe('file reader', function(){
  var primeFinder;

  beforeEach(function(){
    primeFinder = new PrimeFinder();
  });

  it('determines number is prime', function(){
    var result = primeFinder.isPrime(5);
    expect(result).toBe(true);
  });

  it('determines number is not prime', function(){
    var result = primeFinder.isPrime(10);
    expect(result).toBe(false);
  });
});
