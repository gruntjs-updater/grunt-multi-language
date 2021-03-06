'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.multi_language = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  translate: function(test) {
    test.expect(2);

    var actualEn = grunt.file.read('tmp/test.en.html');
    var expectedEn = grunt.file.read('test/expected/test.en.html');
    test.equal(actualEn, expectedEn, 'should describe what the default behavior is.');

    var actualRu = grunt.file.read('tmp/test.ru.html');
    var expectedRu = grunt.file.read('test/expected/test.ru.html');
    test.equal(actualRu, expectedRu, 'should describe what the default behavior is.');

    test.done();
  }
};
