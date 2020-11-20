
const gulp = require('gulp');

gulp.task('escape', function() {
  sources = [
    './node_modules/escape-button/index.js',
    './node_modules/escape-button/escape.css'
  ];
  return gulp.src(sources).pipe(gulp.dest('./escape'));
});

gulp.task('copy-escape', gulp.series('escape'));
