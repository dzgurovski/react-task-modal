module.exports = {
    entry: {
        main: './src/App.js'
    },
    output: {
        filename: './dist/js/main.min.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            include: __dirname,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{loader: 'file-loader?name=dist/images/[name].[ext]'}, {loader: 'image-webpack-loader'}]
        }, {

            test: /\.scss$/,
            use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]
        }
        ]
    }
}