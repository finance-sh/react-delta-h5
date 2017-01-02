/**
 * Created by delta
 */
 
var projectName = 'components-pc';
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin'); // 清理文件夹
// 一些路径信息
var ROOT_PATH = path.resolve(__dirname);
var NODE_PATH = path.resolve(ROOT_PATH, 'node_modules');

var REACT = path.resolve(NODE_PATH, 'react/dist/react.min.js');
var REACTDOM = path.resolve(NODE_PATH, 'react-dom/dist/react-dom.min.js');
var fs = require('fs');

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        app: './app.jsx',
        vendors: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        // 文件输出目录
        path: path.resolve(__dirname, 'dist'),
        // 根据entry的入口名称生成多个js文件
        filename: '/assets/' + projectName + '/js/[name]_[hash:8].js',
        chunkFilename: '/assets/' + projectName + '/js/[name]_[hash:8]_chunk.js',
        // 用于配置文件发布路径，如CDN或本地服务器
        publicPath: ''
    },

    module: {
        // noParse: [REACT],
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                exclude: /\.useable\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            },
            {
                test: /\.useable\.less$/,
                exclude: /node_modules/,
                loader: 'style/useable!css!postcss!less'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=/assets/' + projectName + '/img/[name]_[hash:8].[ext]'
                // loader: 'url?limit=1024'
            }
        ]
    },
    postcss: [
        autoprefixer
    ],
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx'
        ],
        alias: {
            'react': REACT,
            'react-dom': REACTDOM
        }
    },
    plugins: [
        // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        new webpack.optimize.DedupePlugin(),
        
        new webpack.DefinePlugin({
            DEBUG: false
        }),
        new ExtractTextPlugin('app.min.css'),

        new CleanPlugin(['dist']),

        new webpack.optimize.CommonsChunkPlugin('vendors', '/assets/' + projectName + '/js/vendors_[hash:8].js'),
        // 使用uglifyJs压缩JS代码
        new webpack.optimize.UglifyJsPlugin({
            minimize: false
        }),
        // 把入口里面的数组打包成vendors.js
        new HtmlWebpackPlugin({
            title: 'Delta UI',
            template: path.join(__dirname, './app/index.tpl.html'),
            filename: './template/' + projectName + '/index.html',
            // chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: [
                'vendors',
                'app'
            ],
            minify: {
                minifyJS: true,
                removeComments: true,
                minifyCSS: true
            }
        })
    ]
};