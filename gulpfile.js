var gulp = require('gulp'),
    htmltidy = require('gulp-htmltidy');

gulp.task('default', function() {
  return gulp.src('./*.html')
        .pipe(htmltidy({doctype: 'html5',
					   hideComments: true,
					   indent: false,
					   clean:true}))
        .pipe(gulp.dest('build/'));;
});