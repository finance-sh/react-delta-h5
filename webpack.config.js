/**
 * Created by delta
 */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// path
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var NODE_MODULES_PATH = path.resolve(ROOT_PATH,'node_modules');
var TEMPLATE_PATH = path.resolve(ROOT_PATH,'./src/index.tpl.html');
var ADAPTIVE_PATH = path.resolve(NODE_MODULES_PATH,'adaptive.js/js/adaptive.js');

// adaptive
var adaptiveText = fs.readFileSync(ADAPTIVE_PATH,'utf8');

// postcss
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var atImport = require('postcss-import');
var px2rem = require('postcss-plugin-px2rem');

module.exports = {

    context: APP_PATH,

    // 获取项目入口JS文件
    entry: {
        app: './App.jsx'
    },
    
    // 各种加载器，让各种文件格式可用require引用
    module: {
        loaders: [
            {
                test: /\.duss$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
                exclude: /\.useable\.duss|node_modules$/
            },
            {
                test: /\.useable\.duss$/,
                loaders: [
                    'style-loader/useable',
                    'css-loader',
                    'postcss-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192',
                exclude: /node_modules/
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
        ]
    },

    postcss: function (webpack) {
        var option = {
            px2rem: {
                minPixelValue: 2
            },
            atImport: {
                addDependencyTo: webpack
            }
        };
        return [
            atImport(option.atImport),
            precss,
            autoprefixer,
            px2rem(option.px2rem)
        ];
    },

    // enable dev server
    devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        progress: true,
        host: '0.0.0.0'
    },

    resolve: {
        // 查找module的话从这里开始查找
        root: path.resolve(ROOT_PATH, 'src'),
         // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: [
            '',
            '.js',
            '.jsx'
        ]
    },

    // 生成sourcemap,便于开发调试
    devtool: 'cheap-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Delta UI',
            template: TEMPLATE_PATH,
            filename: 'index.html',
            // chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: [
                'app'
            ],
            inject: 'body',
            chunksSortMode: 'dependency',
            adaptive: adaptiveText
        }),
    ]
};
