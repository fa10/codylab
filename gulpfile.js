/// <binding ProjectOpened='watch' />
"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    less = require('gulp-less');

var webroot = "./wwwroot/";

var lessPaths = webroot + "lib/bootstrap-less/less";

var paths = {
    appLess: "./Resources/less/app.less",
    less: "./Resources/less/*.less"
};

gulp.task("less", function () {
    return gulp.src(paths.appLess)
            .pipe(less({ paths: [lessPaths] }))
            .pipe(gulp.dest(webroot + '/css'));
});

gulp.task('watch', function () {
    gulp.watch(paths.less, ['less']);
});