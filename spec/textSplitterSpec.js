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

  it('it splits text separated by spaces and any punctuation into words', function(){
    var textSample = 'Of course, Mothers never have favourites';
    var expectedResult = [
      'Of',
      'course',
      'Mothers',
      'never',
      'have',
      'favourites'
    ];

    var splitter = new TextSplitter(textSample);
    expect(splitter.toArray()).toEqual(expectedResult);
  });

  it('considers __text__ to be one word', function(){
    var textSample = 'Of __course__ Mothers never have favourites';
    var expectedResult = [
      'Of',
      '__course__',
      'Mothers',
      'never',
      'have',
      'favourites'
    ];

    var splitter = new TextSplitter(textSample);
    expect(splitter.toArray()).toEqual(expectedResult);
  });
});
