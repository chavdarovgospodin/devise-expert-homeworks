module.exports = {
    entry: './src/index.ts'
    , resolve: {
        extensions: ['.ts', '.js']
    }
    , module: {
        rules: [{
            test: /\.ts$/, loader: 'ts-loader'
        }]
    }
};