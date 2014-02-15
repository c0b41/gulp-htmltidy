# [gulp](https://github.com/wearefractal/gulp)-htmltidy [![Build Status](https://travis-ci.org/cobaimelan/gulp-htmltidy.png?branch=master)](https://travis-ci.org/cobaimelan/gulp-htmltidy)

> HTML Tidy is an open source program for checking and generating clean XHTML/HTML. It cleans up coding errors in HTML files and fixes bad formatting. It can output files in the HTML, XHTML or XML file format.

> Using HTML Tidy, developers can programatically clean up and fix poorly-written HTML pages. Another use is to convert HTML to XHTML or XML. These files can then be easily processed using the tools in the traditional XML chain, such as XSL transforms.

Inspired by the grunt plugin [grunt-htmltidy](https://github.com/cobaimelan/gulp-htmltidy). Uses the [htmltidy](https://github.com/vavere/htmltidy) library.

## How It Works
`/path/to/file.html`:
```html
<html>
    <head>
      <style>
        p { color: red; }
      </style>
    </head>
    <body>
   		  <!-- ===== body ====== -->
     	 <p>Test</p>
            
    </body>
        <!--Default Zone
        -->
        <!--Default Zone End-->
</html>
```



Output:
```html
<!DOCTYPE html>
<html>
<head>

<style>
      p { color: red; }
</style>
<title></title>
</head>
<body>
<p>Test</p>
</body>
</html>

```


## Install

Install with [npm](https://npmjs.org/package/gulp-inline-css)

```
npm install --save-dev gulp-htmltidy
```


## Usage

```js
var gulp = require('gulp'),
    htmltidy = require('gulp-htmltidy');

gulp.task('default', function() {
  return gulp.src('./*.html')
        .pipe(htmltidy())
        .pipe(gulp.dest('build/'));;
});
```

With options:

```js
var gulp = require('gulp'),
    htmltidy = require('htmltidy');

gulp.task('default', function() {
  return gulp.src('./*.html')
        .pipe(htmltidy({doctype: 'html5',
					   hideComments: true,
					   indent: false}))
        .pipe(gulp.dest('build/'));;
});
```

Clean html like text according optional configuration [tidy options](http://w3c.github.io/tidy-html5/quickref.html).


## API

### htmltidy(options)


#### options.doctype

Type: `String`


#### options.hideComments

Type: `Boolean`
Default: `false`

#### options.indent

Type: `Boolean`
Default: `false`



