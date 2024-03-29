var gulp = require("gulp"),
	minifycss = require("gulp-minify-css"),
	uglify = require("gulp-uglify"),
	htmlmin = require("gulp-htmlmin"),
	htmlclean = require("gulp-htmlclean");
gulp.task("minify-css", function() {
	return gulp.src("./**/*.css").pipe(minifycss()).pipe(gulp.dest("./public"))
}), gulp.task("minify-html", function() {
	return gulp.src("./**/*.html").pipe(htmlclean()).pipe(htmlmin({
		removeComments: !0,
		minifyJS: !0,
		minifyCSS: !0,
		minifyURLs: !0
	})).pipe(gulp.dest("./public"))
}), gulp.task("minify-js", function() {
	return gulp.src(["./**/*.js", "!./**/*.min.js"]).pipe(uglify()).pipe(gulp.dest("./public"))
}), gulp.task("default", gulp.parallel("minify-html", "minify-css", "minify-js"));
