//Dependencies
import webpack from 'webpack'
import path from 'path'

//Paths
const PATHS = {
    index: path.join(__dirname, 'src/views/index.js'),
    biuld: path.join(__dirname, 'src/dist'),
    base: path.join(__dirname, 'src')
}

//Webpack Config
export default {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        PATHS.index
    ],
    output: {
        path: PATH.biuld,
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders:[
            {
                test: /\.js?$/,
                loaders: ['babel-loader'],
                include: PATHS.base
            },
            {
                test: /(\.css)?$/,
                loaders: ['css-loader', 'style-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
}