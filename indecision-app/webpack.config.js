const path = require('path');

module.exports = {
    mode: 'development',
    entry : './src/App.js',
    output : {
        path : path.join(__dirname,'public'),
        filename: 'bundle.js',
    },
    module : {
        rules: [{
            loader : 'babel-loader',
            test: /\.js$/,
            exclude: /node-modules/ 
        } , {
            test:/\.s?css$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool : 'eval-source-map',
    devServer : {
        contentBase : path.join(__dirname,'public')
    }
};

// loader for js

