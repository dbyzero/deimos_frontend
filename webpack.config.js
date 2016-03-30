module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'app.js',
        path: './dist',
        publicPath: 'http://localhost:8090',
        sourceMapFilename: 'app.js.map'
    },
    module: {
        loaders: [
            {
                test: /\.json$/, loader: 'json-loader'
            },
            {
                test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    node: {
      fs: "empty",
      net: "empty",
      tls: "empty"
    }
}
