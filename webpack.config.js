const path    = require('path');
const webpack = require('webpack');

const src  = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

module.exports = {
    context: src,

    entry: {
        app: './main.js',
    },

    output: {
        path: dist,
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js'],
        modules: [
            src,
            'node_modules'
        ],
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource),
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
};


