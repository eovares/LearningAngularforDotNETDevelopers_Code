var paths = {
    sourcePath: "./node_modules",
    targetPath: "./wwwroot/libs"
}

var librariesToMove = [
    paths.sourcePath + '/core-js/client/shim.min.js',
    paths.sourcePath + '/zone.js/dist/zone.min.js',
    paths.sourcePath + '/systemjs/dist/system.src.js',
];

var gulp = require('gulp');

gulp.task('librariesToMove', function () {
    return gulp.src(librariesToMove).pipe(gulp.dest(paths.targetPath));
});