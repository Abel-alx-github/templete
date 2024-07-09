const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode : "development",
    devtool: "inline-source-map",
    devServer: {
        static: "dist",
        port: 3500,
    },
    
    entry: "./src/index.js",

    output: {
        filename: "[main].bundle.js",
        path: path.resolve('dist'),
    },

    module : {
        rules : [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ["file-loader"],
            },


            ],
       
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        })
    ],



}