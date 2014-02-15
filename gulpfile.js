var gulp = require('gulp'),
    htmltidy = require('htmltidy');

gulp.task('default', function() {
  return gulp.src('./*.html')
        .pipe(htmltidy())
        .pipe(gulp.dest('build/'));;
});