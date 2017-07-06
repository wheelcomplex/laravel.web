var webpack = require('webpack');
var path = require('path');

module.exports={
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
           {
             test: /\.js$/,
             loader: 'babel-loader',
             exclude: /node_modules/,
             query: {
                presets: ['es2015'],
                plugins: ["transform-es2015-template-literals"]
              }
           },
           {
             test: /\.vue$/,
             loader: 'vue-loader'
           }
         ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: []
};
/*
module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        sourcemap: true,
        compress: {
            warnings:false
        }
    })
);*/
