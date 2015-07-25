var gulp = require('gulp');
var p = require('gulp-load-plugins')();

gulp.task('default', ['lintjsfiles']);

// Lint all js files
gulp.task('lintjsfiles', function() {
  gulp.src('./app.js')
    .pipe(p.jshint())
    .pipe(p.jshint.reporter('jshint-stylish'));

  gulp.src('./gulpfile.js')
    .pipe(p.jshint())
    .pipe(p.jshint.reporter('jshint-stylish'));

  gulp.src('./package.json')
    .pipe(p.jshint())
    .pipe(p.jshint.reporter('jshint-stylish'));
});
