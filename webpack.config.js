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
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
};
