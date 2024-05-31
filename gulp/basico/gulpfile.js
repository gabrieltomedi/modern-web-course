const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const series = gulp.series

const before1 = callback => {
    console.log('Antes 1')
    return callback()
}

const before2 = callback => {
    console.log('Antes 2')
    return callback()
}

function copy(callback) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        // .pipe(cortarPelaMetade())
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return callback()
}

const end = callback => {
    console.log('Fim')
    return callback()
}

module.exports.default = series(
    parallel(before1, before2),
    copy,
    end
)