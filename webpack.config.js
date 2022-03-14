const path = require('path');

module.exports = env => ({
    mode: env && env.prod ? 'production' : 'development',
    entry: path.join(__dirname, 'src', 'main.js'),
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
});
