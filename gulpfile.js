'use strict';
const gulp = require('gulp');
const babelify = require('babelify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const through2 = require('through2');
const rework = require('gulp-rework');
const reworkNPM = require('rework-npm');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();

gulp.task('serve', ['babel', 'sass'], () => {
  browserSync.init({
    server: './',
  });

  gulp.watch('./src/js/**/*.js', ['babel']);
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./html/*.html').on('change', browserSync.reload);
});

gulp.task('babel', () => {
  gulp.src('./src/js/*.js')
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

gulp.task('sass', () => {
  gulp.src('./src/scss/*.scss')
    .pipe(rework(reworkNPM(), {sourcemap: true}))
    .pipe(sass())
    .pipe(rename({extname: '.css'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);



