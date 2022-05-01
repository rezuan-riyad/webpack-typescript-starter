const path = require("path")

module.exports = {
    devtool: "eval-source-map",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    devServer: {
        static: "./public",
        open: true,
        compress: true,
        hot: true,
        port: 8000,
    },
    mode: "development"
}