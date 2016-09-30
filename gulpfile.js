const gulp = require('gulp');
const ts = require("gulp-typescript");
const tscConfig = require('./tsconfig.json');
const del = require('del');
const runSequence = require('run-sequence');

gulp.task('clean', () => {
    return del('./public');
});


gulp.task('copy', () => {
    return gulp.src(['./client-development/app/**/*.html', './client-development/app/systemjs.config.js'])
        .pipe(gulp.dest('./public'));
});

gulp.task('angular-dependencies', () => {
    return gulp.src('./client-development/node_modules/**/*')
        .pipe(gulp.dest('./public/node_modules'));
});


gulp.task('clean:dist', () => {
    return del('./public/dist');
});

gulp.task('compile:ts', ['clean:dist'], () => {
    return gulp.src(['./client-development/app/**/*.ts', './client-development/typings/index.d.ts'])
        .pipe(ts(tscConfig.compilerOptions))
        .pipe(gulp.dest("./public/dist"));
});


gulp.task('build', ()=>{
    runSequence('clean', 
                'copy', 
                'angular-dependencies', 
                'compile:ts');
});



/*gulp.task('build:bundle', () => {
    return browserify('./public/dist/main.js', {
            debug: true
        })
        .transform(babelify)
        .bundle()
        .on('error', (e) => {
            console.error(e.stack);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/dist'));
});*/
