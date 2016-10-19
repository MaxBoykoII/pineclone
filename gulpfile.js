const gulp = require('gulp');
const ts = require("gulp-typescript");
const tscConfig = require('./tsconfig.json');
const del = require('del');
const $ = require('gulp-load-plugins')({
    lazy: true
});

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
        .pipe($.tslint({
            formatter: 'verbose',
            configuration: './tslint.json'
        }))
        .pipe($.tslint.report())
        .pipe(ts(tscConfig.compilerOptions))
        .pipe(gulp.dest("./public/dist"));
});

gulp.task('component:scss', () => {
    return gulp.src('./client-development/app/sass/**/*.scss')
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.autoprefixer({
            browsers: ['last 3 version', '>1%', 'iOS 7']
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('build', () => {
    runSequence('clean',
        ['copy', 'component:scss'],
        'angular-dependencies',
        'compile:ts');
});

gulp.task('lint', () => {
    return gulp.src(['./server.js', './server-side/**/*.js'])
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }));
});

gulp.task('server-tests', () =>{
     return gulp.src(['server-side/tests/*.js'], { read: false })
    .pipe($.mocha({
      reporter: 'spec',
      globals: {
        should: require('expect.js')
      }
    }));
})

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
