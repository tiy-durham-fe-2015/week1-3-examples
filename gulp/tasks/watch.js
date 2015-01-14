// watch watches the /src directory for changes and
// launches the appropriate task

var gulp = require('gulp'),
    watch = require('../util/watch'),
    gulpStart = require('../util/gulpstart'),
    connect = require('gulp-connect');

gulp.task('refresh', function () {
  return gulp.src('**/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  watch({
    root: '.',
    match: [{
      when: '+(scss|css|fonts|img)/**',
      then: gulpStart('refresh')
    }, {
      when: '**/*.+(html|ejs)',
      then: gulpStart('refresh')
    }]
  });
});
