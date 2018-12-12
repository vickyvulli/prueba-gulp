var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

//gulp.task('default', ['scripts', 'styles', 'watch']);


// styles task
gulp.task('styles', function() {
    return gulp.src('./src/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dest/css/'))
    .pipe(cssmin())
    .pipe(gulp.dest('./dest/css/'));
});

// scripts task
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dest/js/'))
    .pipe(uglify())
    .pipe(rename({
    suffix: '.min'
    }))
    .pipe(gulp.dest('./dest/js/'));
    });


// watch task
gulp.task('watch', function() {
    gulp.watch('./src/js/*.js', gulp.series('scripts'));
    gulp.watch('./src/css/*.scss', gulp.series('styles'));
    });

    
gulp.task('default', gulp.parallel('scripts', 'styles', 'watch'));
        