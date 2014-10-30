var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    uglify     = require('gulp-uglify'),
    connect    = require('gulp-connect'),
    rename     = require('gulp-rename'),
    jshint     = require('gulp-jshint');


/**
 * Create test server
 */
gulp.task('connect', function() {
  return connect.server({
    root: 'public',
    livereload: true
  });
});

/**
 * Lint all of the javascript
 */
gulp.task('lint', function() {
  return gulp.src('game/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/**
 * Browserify all the javascript!
 */
gulp.task('browserify', function() {
  return gulp.src('./src/index.js')
    .pipe(browserify({
      transform: ['cssify', 'famousify'],
      insertGlobals : true,
      debug : true
    }))
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});

/**
 * Watch javascript files for changes and run browserify
 */
gulp.task('watch', function() {
  gulp.watch(['src/**/*.js', 'src/styles/*.css'], ['browserify', 'lint']);
});

/**
 * Setup default task
 */
gulp.task('default', ['browserify', 'lint']);

gulp.task('serve', ['connect', 'watch', 'browserify', 'lint']);
