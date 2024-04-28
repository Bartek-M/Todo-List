const path = require("path");
const webpack = require("webpack")

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./assets/js"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", ".tsx"],
        modules: ["node_modules"],
    },
    module: {
        rules: [{
            use: "ts-loader",
            exclude: /node_modules/
        }]
    },
    optimization: { minimize: true },
    devtool: "eval-cheap-source-map"
}