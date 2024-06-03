const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformJS() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build'))
}

const end = callback => {
    console.log('end')
    return callback()
}

exports.default = series(transformJS, end)