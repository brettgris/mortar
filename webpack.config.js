const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        js: path.resolve(__dirname, 'bundle.js'),  
    },
    output: {
        path: path.resolve(__dirname, 'dist/bundle'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
}