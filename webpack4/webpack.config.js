const path = require('path');

module.exports={
    mode:'development',
    entry: {
        index: './src/index.js',
        index1: './src/index.1.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js'
    },
    module: {

    },
    plugins: [],
    devServer: {
        contentBase: path.resolve(__dirname,'./dist'),
        host: '127.0.0.1',
        port:'8081',
        compress: true,
        open: true
    }
}