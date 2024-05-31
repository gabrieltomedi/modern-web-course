const gulp = require('gulp')
//const { series } = require('gulp')
const series = gulp.series

function copy(callback) {
    console.log('Tarefa de copiar')
    return callback()
}

module.exports.default = series(copy)