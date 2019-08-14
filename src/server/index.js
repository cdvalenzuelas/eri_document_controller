//Dependencies
import express from 'express'
import webpack from 'webpack'
import path from 'path'
import webpackdevMiddleware from 'webpack-dev-middleware'
import webpackhotMiddleware from 'webpack-hot-middleware'
import open from 'open'

//Webpack Configuration
import webpackConfig from '../../webpack.config.dev'

//Server Port
const port = 3000;

//express app
const app = express();

//Webpack Compiler
const webpackCompiler = webpack(webpackConfig)

//Webpack Middleware
app.use(webpackdevMiddleware(webpackCompiler));
app.use(webpackhotMiddleware(webpackCompiler));

//Sending all trafiic to react

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

//Listen port
app.listen(port, err => {
    if (!err){
        open(`http://localhost:${port}`)
    }
})