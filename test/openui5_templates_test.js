'use strict';

var grunt = require('grunt');
var path = require("path");

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

var compareFiles = function (test, actual, expacted) {
    var files = grunt.file.expandMapping([path.join(actual, '**'), '!' + path.join(actual, '**/metadata.xml')], expacted, {
        filter: function (path) {
            return grunt.file.isFile(path);
        },
        rename: function (dest, matchedSrcPath) {
            return path.join(dest, path.relative(actual, matchedSrcPath));
        }
    });

    test.expect(files.length);

    files.map(function (file) {
        var actual = grunt.file.read(file.src).replace(/\r\n/g,'\n');

        if (grunt.file.isFile(file.dest)) {
            var expected = grunt.file.read((file.dest)).replace(/\r\n/g,'\n');
            test.equal(actual, expected, 'File "' + file.dest + '" content mismatch');
        }
        else {
            test.equal(false, true, 'File "' + file.dest + '" does not exist');
        }
    });

    test.done();
}

exports.openui5_templates = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    wl_flp_no_unit: function (test) {
        compareFiles(test, 'tmp/wl_flp_no_unit', 'test/expected/wl_flp_no_unit');
    },
    wl_flp_unit: function (test) {
        compareFiles(test, 'tmp/wl_flp_unit', 'test/expected/wl_flp_unit');
    },
    wl_standalone_no_unit: function (test) {
        compareFiles(test, 'tmp/wl_standalone_no_unit', 'test/expected/wl_standalone_no_unit');
    },
    wl_standalone_unit: function (test) {
        compareFiles(test, 'tmp/wl_standalone_unit', 'test/expected/wl_standalone_unit');
    },
    md_flp_unit_line_line_unit: function (test) {
        compareFiles(test, 'tmp/md_flp_unit_line_line_unit', 'test/expected/md_flp_unit_line_line_unit');
    },
    md_flp_no_unit_line_line_unit: function (test) {
        compareFiles(test, 'tmp/md_flp_no_unit_line_line_unit', 'test/expected/md_flp_no_unit_line_line_unit');
    },
    md_flp_no_unit_line_no_line_unit: function (test) {
        compareFiles(test, 'tmp/md_flp_no_unit_line_no_line_unit', 'test/expected/md_flp_no_unit_line_no_line_unit');
    },
    md_flp_no_unit_no_line: function (test) {
        compareFiles(test, 'tmp/md_flp_no_unit_no_line', 'test/expected/md_flp_no_unit_no_line');
    },
    md_flp_unit_line_no_line_unit: function (test) {
        compareFiles(test, 'tmp/md_flp_unit_line_no_line_unit', 'test/expected/md_flp_unit_line_no_line_unit');
    },
    md_flp_unit_no_line: function (test) {
        compareFiles(test, 'tmp/md_flp_unit_no_line', 'test/expected/md_flp_unit_no_line');
    },
    md_standalone_no_unit_line_line_unit: function (test) {
        compareFiles(test, 'tmp/md_standalone_no_unit_line_line_unit', 'test/expected/md_standalone_no_unit_line_line_unit');
    },
    md_standalone_no_unit_line_no_line_unit: function (test) {
        compareFiles(test, 'tmp/md_standalone_no_unit_line_no_line_unit', 'test/expected/md_standalone_no_unit_line_no_line_unit');
    },
    md_standalone_no_unit_no_line: function (test) {
        compareFiles(test, 'tmp/md_standalone_no_unit_no_line', 'test/expected/md_standalone_no_unit_no_line');
    },
    md_standalone_unit_line_line_unit: function (test) {
        compareFiles(test, 'tmp/md_standalone_no_unit_no_line', 'test/expected/md_standalone_no_unit_no_line');
    },
    md_standalone_unit_line_no_line_unit: function (test) {
        compareFiles(test, 'tmp/md_standalone_unit_line_no_line_unit', 'test/expected/md_standalone_unit_line_no_line_unit');
    },
    md_standalone_unit_no_line: function (test) {
        compareFiles(test, 'tmp/md_standalone_unit_no_line', 'test/expected/md_standalone_unit_no_line');
    }


};
