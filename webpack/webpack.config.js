const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main1.js'
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    }
}