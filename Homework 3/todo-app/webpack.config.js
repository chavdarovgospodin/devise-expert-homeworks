module.exports = {
    entry: './src/index.ts'
    , output: {
        filename: './dist/app.js'
    }
    , resolve: {
        extensions: ['.ts', '.js']
    }
    , module: {
        rules: [{
            test: /\.ts$/, loader: 'ts-loader'
        }]
    }
};