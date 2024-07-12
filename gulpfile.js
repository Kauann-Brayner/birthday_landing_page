const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function styles(){
    return gulp.src("./src/styles/main.scss")
    .pipe(sass({
        outputStyle: "compressed"
    }))
    .pipe(gulp.dest("./dist/styles"))
}

function scripts(){
    return gulp.src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/scripts"))
}


function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, scripts, images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('*.html', gulp.parallel(styles));
    gulp.watch('src/scripts/*.js', gulp.parallel(scripts));
    gulp.watch('./src/images/**/*', gulp.parallel(images));
}