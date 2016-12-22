/**
 * @file   webpack.config.js
 * @author baidu.inc
 */

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var px2rem = require('postcss-plugin-px2rem');

// 一些路径信息
var ROOT_PATH = path.resolve(__dirname);
var NODE_PATH = path.resolve(ROOT_PATH, 'node_modules');
var REACT = path.resolve(NODE_PATH, 'react/dist/react.js');
var REACTDOM = path.resolve(NODE_PATH, 'react-dom/dist/react-dom.js');

module.exports = {
    context: path.join(__dirname, 'src'),
    // 获取项目入口JS文件
    entry: {
        app: './App.jsx',
        // adaptive: './component/tools/Adaptive/Adaptive.jsx'
    },
    output: {
        // 文件输出目录
        path: path.resolve(__dirname, 'dist'),
        // 根据entry的入口名称生成多个js文件
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        // 用于配置文件发布路径，如CDN或本地服务器
        publicPath: '/'
    },
    // 各种加载器，让各种文件格式可用require引用
    module: {
        noParse: [REACT],
        // preLoaders: [
        //     {
        //         test: /\.js[x]?$/,
        //         loader: 'source-map-loader'
        //     }
        // ],
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                exclude: /\.useable\.less$/,
                loader: 'style!css!postcss!less!px-rem'
            },
            {
                test: /\.useable\.less$/,
                exclude: /node_modules/,
                loader: 'style/useable!css!postcss!less'
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url?limit=8192'
            }
        ]
    },

    postcss: function() {
        var px2remOpts = {
            minPixelValue: 2
        };
        return [
            // px2rem(px2remOpts),
            autoprefixer
        ];
    },

    // 在JS中import加载jsx这种扩展名
    resolve: {
        root: path.resolve(ROOT_PATH, 'app'),
        extensions: [
            '',
            '.js',
            '.jsx'
        ],
        // 配置别名，在项目中可缩减引用路径
        alias: {
            'react': REACT,
            'react-dom': REACTDOM
        }
    },

    // 生成sourcemap,便于开发调试
    devtool: 'cheap-source-map',
    // enable dev server
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        // ajax 代理到5000端口
        proxy: {
            '/cf/**': {
                target: 'http://127.0.0.1:5000',
                // target: 'http://cp01-base-stable-spiderman.epc:8943',
                secure: false
            }
        },
        host: '0.0.0.0'
    },

    plugins: [
        
        new ExtractTextPlugin('app.min.css'),
        // 把入口里面的数组打包成vendors.js
        new HtmlWebpackPlugin({
            title: 'delta ui',
            template: path.join(__dirname, './src/index.tpl.html'),
            filename: 'index.html',
            // chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: [
                'app'
            ],
            inject: 'body',
            chunksSortMode: 'dependency'
        }),
      
    ]
};
