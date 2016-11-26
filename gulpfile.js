const del = require("del");
const gulp = require("gulp");
const package = require("./package");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const runseq = require("run-sequence");
const template = require("gulp-template");

const fs = require("graceful-fs");

gulp.task("clean", () => {
	del(["dist/*"]).then(
		() => fs.mkdir("dist", err => {
			if (err && err.code !== "EEXIST")
				console.error(err);
		}),
		err => console.error(err)
	);
});

gulp.task("minify", () => {
	return gulp.src("src/emoji-picker.js")
		.pipe(uglify())
		.pipe(rename("emoji-picker.min.js"))
		.pipe(gulp.dest("dist"));
});

gulp.task("userscript", () => {
	return gulp.src(["src/emoji-picker.meta.js", "src/emoji-picker.user.js"])
		.pipe(concat("emoji-picker.user.js"))
		.pipe(template(package))
		.pipe(gulp.dest("dist"));
});

gulp.task("build", runseq("clean", "minify", "userscript"));