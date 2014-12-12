var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browsersync', function() {
  browserSync({
    open: false,
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['browsersync']);
