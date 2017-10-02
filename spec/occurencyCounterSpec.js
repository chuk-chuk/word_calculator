var OccurencyCounter = require('../src/occurencyCounter').OccurencyCounter;

describe('count occurencies', function(){
  var counter;

  beforeEach(function(){
    counter = new OccurencyCounter();
  });

  it('counts number of times each element appears in an array', function(){
    var input = [
      'They',
      'were',
      'to',
      'railway',
      'children',
      'to',
      'begin',
      'begin'
    ];

    var expectedResult = {
      'They': 1,
      'were': 1,
      'to': 2,
      'railway': 1,
      'children': 1,
      'begin': 2
    };

    expect(counter.calculate(input)).toEqual(expectedResult);
  });
});
