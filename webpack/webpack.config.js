const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main1.js'
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', // add CSS to the DOM by injecting the Tag <style>
                'css-loader' // interprets @import, url()...
            ]
        }]
    }
}