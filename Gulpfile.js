var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    uglify     = require('gulp-uglify'),
    connect    = require('gulp-connect'),
    rename     = require('gulp-rename'),
    jshint     = require('gulp-jshint');

gulp.task('connect', function() {
  return connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browserify', function() {
  return gulp.src('./src/index.js')
    .pipe(browserify({
      transform: ['cssify', 'famousify'],
      insertGlobals : true,
      debug : true
    }))
    //.pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['src/**/*.js', 'src/styles/*.css'], ['browserify', 'lint']);
});

gulp.task('default', ['browserify', 'lint']);

gulp.task('serve', ['connect', 'watch', 'browserify', 'lint']);
