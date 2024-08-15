const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizePlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: {
        main: './src/main1.js'
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [            
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6,
                },
            }), 
            new CssMinimizePlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // add CSS to the DOM by injecting the Tag <style> ^ conflicts with the plugin above
                'css-loader', // interprets @import, url()...
                'sass-loader'
            ]
        }]
    }
}