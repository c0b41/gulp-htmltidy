var expect = require('expect.js');
var fs = require('fs');
var gutil = require('gulp-util');
var htmltidy = require('../index.js');

it('Htmltidy Test', function (cb) {
	var stream = htmltidy({doctype: 'html5',
					   hideComments: true,
					   indent: false,
					   clean:true});

	stream.on('data', function (file) { 
		expect(file.contents.toString()).to.eql(fs.readFileSync(__dirname + '/expected/test.html').toString());
		 
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixtures',
		path: __dirname + '/fixtures/test.html',
		contents: fs.readFileSync(__dirname + '/fixtures/test.html')
	}));

	stream.end();
	
});
