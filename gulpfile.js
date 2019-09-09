'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = {
  styles: {
    src: './src/styles/scss/*.sass',
    dest: './src/styles/css',
  },
  html: {
    src: './public/index.html'
  }
};

function style() {
  return (
    gulp.src(paths.styles.src)
      .pipe(sass()).on('error', sass.logError)
      .pipe(gulp.dest(paths.styles.dest))
  );
};

function watch() {
  style();
  gulp.watch(paths.styles.src, style);
};

exports.style = style;
exports.watch = watch;
