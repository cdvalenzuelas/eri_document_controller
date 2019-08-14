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
        path:  path.join(__dirname, 'src/public'),        
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules:[
            {
                test: /\.js?$/,
                use: [{loader: 'babel-loader'}],
                include: PATHS.base
            },
            {
                test: /(\.css)?$/,
                use: [{loader: 'css-loader'}, {loader:'style-loader'}]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
            }
        ]
    }
}