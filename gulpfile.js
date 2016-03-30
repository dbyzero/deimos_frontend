var gulp = require('gulp');
var react = require('gulp-react'); 
var uglify = require('gulp-uglify'); 
var webpack = require('webpack-stream');
// var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
// var buffer = require('vinyl-buffer');
// var browserify = require('browserify');
// var watchify = require('watchify');

// gulp.task('browserify', function() {
//     var bundler = browserify({
//         entries: ['./src/app.jsx'], // Only need initial file, browserify finds the deps
//         transform: [reactify], // We want to convert JSX to normal javascript
//         debug: true, // Gives us sourcemapping
//         cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
//     });

//     var watcher  = watchify(bundler);
//     var makeIt = function() {
//         return watcher
//             .bundle() // Create the initial bundle when starting the task
//             .pipe(source('puck.js'))
//             .pipe(buffer())
//             // .pipe(uglify())
//             .pipe(gulp.dest('./dist/'));
//     }

//     watcher.on('update', function () { // When any files update
//             var updateStart = Date.now();
//             console.log('Following files change:');
//             for(var i = 0; i < arguments[0].length;i++) {
//                 console.log(arguments[0][i].yellow);
//             }
//             makeIt(); 
//             console.log('Updated in ', (Date.now() - updateStart) + 'ms');
//         })

//     return makeIt();
// });

// Just running the two tasks
// gulp.task('default', ['browserify']);


gulp.task('default', function() {
    return gulp.src('./src/app.jsx')
        .pipe(react())
        .pipe(webpack({
            watch: true,
            output: {
                filename: 'build.js',
            }
        }))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});