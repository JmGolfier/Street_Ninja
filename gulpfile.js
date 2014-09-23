var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require("gulp-rename");

gulp.task("default", ["scripts", "watch"]);

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    return gulp.src('js/app.js')
        .pipe(rename("app.min.js"))
        .pipe(browserify({
            insertGlobals : true,
            debug : true
        }))
        .pipe(gulp.dest('js'))
});

gulp.task("watch", function() {
    return gulp.watch("js/**", ["scripts"]);
});