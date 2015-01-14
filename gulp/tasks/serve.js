// serve serves files from the /dist directory

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('default', ['watch'], function () {
  connect.server({
    root: '.',
    port: 8000,
    livereload: true
  });
});
