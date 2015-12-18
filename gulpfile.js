'use strict';

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var exec = require('gulp-exec');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var BASE = './src/';
var scripts = {
  base: BASE,

   colorify:  {
    a: BASE + 'init.js',
    b: BASE + 'base.js',
    c: BASE + 'colorify.js'
  }, 

  ui: {
    a: BASE + 'prism.js',
    b: BASE + 'ui.js'
  }
}

gulp.task('default', ['serve', 'watch', 'sass', 'bundle:colorify'], function(){});

gulp.task('serve', function(){
   gulp.src('./**/**')
    .pipe(exec('npm run serve'));
});

gulp.task('bundle:colorify', ['bundle:ui'], function(){
  gulp.src([scripts.colorify.c])
    .pipe(concat('colorify.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./scripts'));
})

gulp.task('bundle:minify', function(){
  gulp.src('./scripts/colorify.js')
    .pipe(uglify())
    .pipe(rename("colorify.min.js"))
    .pipe(gulp.dest('./scripts'));
})

gulp.task('bundle:ui',  function(){
  gulp.src([scripts.ui.a,scripts.ui.b])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./scripts'));
})



gulp.task('sass', function () {
   return sass('./styles/**/*.scss')
    .on('error', sass.logError)
    .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function () {
  gulp.watch('./styles/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.js', ['bundle:colorify']);
});
