var Reader = require('../src/reader').Reader;

describe('file reader', function(){
  it('can read a file, converting everything to lowercase', function(){
    var reader = new Reader();
    var fileName = "spec/test_data/sample.txt";
    var result = reader.fromFile(fileName);
    expect(result).toEqual('this is is some sample data data data\n');
  });
});
