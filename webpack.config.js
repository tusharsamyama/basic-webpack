const path  = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

module.exports = {
    entry : {
        main: path.resolve(__dirname, 'src/index.js'),
        lib: path.resolve(__dirname, 'src/util.js')
    },
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [ExtractCssChunks.loader ,"css-loader"]
            }
        ]
    },
    plugins: [
        new ExtractCssChunks({
            filename: 'style.css'
        })
    ]
};