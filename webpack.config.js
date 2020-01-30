const path = require("path");

module.exports = {
    entry: './App.js',
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `build`)
    },
    devServer: {
        contentBase: path.join(__dirname),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: './images/[name].[ext]',
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }

        ]
    }
};
