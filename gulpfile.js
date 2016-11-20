'use strict';
var gulp = require('gulp');
var babelify = require('babelify');
var rename = require('gulp-rename');
var scss = require('gulp-scss');
var rework = require('rework');
var reworkNPM = require('rework-npm');
var through2 = require('through2');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['babel', 'scss'], () => {
  browserSync.init({
    server: './',
  });

  gulp.watch('./src/js/*.jsx', ['babel']);
  gulp.watch('./src/scss/*.scss', ['scss']);
  gulp.watch('./html/*.html').on('change', browserSync.reload);
});

gulp.task('babel', () => {
  gulp.src('./src/js/*.jsx')
    .pipe(through2.obj((file, encode, callback) => {
      browserify(file.path)
        .on("error", err => {
          console.log(err);
        })
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle((err, res) => {
          if(err){
            console.log(err);
          }
          file.contents = res;
          callback(null, file);
        });
    }))
    .pipe(rename({extname: '.js'}))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.stream());
});

gulp.task('scss', () => {
  gulp.src('./src/scss/*.scss')
    .pipe(scss())
    .pipe(rework(reworkNPM))
    .pipe(rename({extname: '.css'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);



