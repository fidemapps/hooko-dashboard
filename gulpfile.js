var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browsersync', function () {
  browserSync({
    open: false,
    server: {
      baseDir: './server'
    }
  });
});

gulp.task('default', ['browsersync']);
