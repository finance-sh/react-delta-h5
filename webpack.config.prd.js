/**
 * Created by delta
 */


var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CleanPlugin = require('clean-webpack-plugin'); // 清理文件夹

// path
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'examples');

var NODE_PATH = path.resolve(ROOT_PATH,'node_modules');
var TEMPLATE_PATH = path.resolve(ROOT_PATH,'./src/index.tpl.html');

// adaptive
var ADAPTIVE_PATH = path.resolve(NODE_PATH,'adaptive.js/js/adaptive.js');
var adaptiveText = fs.readFileSync(ADAPTIVE_PATH,'utf8');

// postcss
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var px2rem = require('postcss-plugin-px2rem');
var stylelint = require("stylelint");

var REACT = path.resolve(NODE_PATH, 'react/dist/react.min.js');
var REACTDOM = path.resolve(NODE_PATH, 'react-dom/dist/react-dom.min.js');

module.exports = {

    context: APP_PATH,

    // 获取项目入口JS文件
    entry: {
        app: './App.jsx',
        vendors: [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    
    output: {
        path: BUILD_PATH,
        filename: '[name]_[hash:8].js',
        chunkFilename: '[name]_[hash:8]_chunk.js',
        publicPath: ''
    },

    // 各种加载器，让各种文件格式可用require引用
    module: {
        noParse: [REACT],
        loaders: [
            {
                test: /\.duss$/,
                // loader: ExtractTextPlugin.extract(['style'], 'css!postcss'),
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
            }
        };
        return [
            precss,
            autoprefixer,
            px2rem(option.px2rem),
            stylelint({
                rules: {
                    'max-empty-lines': 2,
                    'property-no-unknown': [ true ],
                    'unit-no-unknown': [ true ]
                } 
            })
        ];
    },

    resolve: {
        // 查找module的话从这里开始查找
        root: path.resolve(ROOT_PATH, 'src'),
         // 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
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

    // 生成sourcemap,便于开发调试
    // devtool: 'cheap-source-map',

    plugins: [

        new webpack.DefinePlugin({
            DEBUG: false
        }),
        new CleanPlugin(['examples']),

        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendors'],
            filename: '[name]_[hash:8].js'
        }),

        // 使用uglifyJs压缩JS代码
        /* eslint-disable fecs-camelcase */
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),

        new HtmlWebpackPlugin({
            title: 'Delta UI',
            template: TEMPLATE_PATH,
            filename: './index.html',
            // chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: [
                'vendors',
                'app'
            ],
            minify: {
                minifyJS: true,
                removeComments: true,
                minifyCSS: true
            },
            inject: 'body',
            chunksSortMode: 'dependency',
            adaptive: adaptiveText
        })
    ]
};
