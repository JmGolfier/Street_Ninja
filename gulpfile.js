var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");
var concat = require('gulp-concat');

gulp.task("default", ["build", "watch"]);
gulp.task("build", ["scripts", "libs"]);

gulp.task('scripts', function() {
    // Single entry point to browserify
    return gulp.src('js/app.js')
        .pipe(rename("app.min.js"))
        .pipe(browserify({
            insertGlobals : true,
            debug : true
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('libs', function() {
    // Single entry point to browserify
    return gulp.src('libs/**')
        .pipe(rename("app.min.js"))
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('dist'))
});

gulp.task("watch", function() {
    return gulp.watch("js/**", ["scripts"]);
});