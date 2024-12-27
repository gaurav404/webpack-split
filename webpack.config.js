const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        library: 'webpack-split',
        libraryTarget: 'umd', // Universal Module Definition
        globalObject: 'this', // For compatibility in Node.js and browser
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // Resolves file extensions
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    devtool: 'source-map', // Add source maps
    mode: process.env.NODE_ENV || 'development', // Default to development mode
};