var TextSplitter = require('../src/textSplitter').TextSplitter;
describe('text splitting', function(){
  it('it splits text separated by spaces into words', function(){
    var textSample = 'They were not railway children to begin with';
    var expectedResult = [
      'They',
      'were',
      'not',
      'railway',
      'children',
      'to',
      'begin',
      'with'
    ];

    var splitter = new TextSplitter(textSample);
    expect(splitter.toArray()).toEqual(expectedResult);
  });
});
