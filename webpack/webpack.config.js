const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main1.js'
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                miniCssExtractPlugin.loader,
                // 'style-loader', // add CSS to the DOM by injecting the Tag <style> ^ conflicts with the plugin above
                'css-loader' // interprets @import, url()...
            ]
        }]
    }
}