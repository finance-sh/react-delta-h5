##REACT Delta

####  webpack 配置
```javascript

// postcss
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var atImport = require("postcss-import");

postcss: function(webpack) {
    var option = {
        atImport: {
            addDependencyTo: webpack
        }
    };
    return [
        atImport(option.atImport),
        precss,
        autoprefixer
    ];
}

// loaders
loaders: [
    {
        test: /\.duss$/,
        loaders: [
            'style-loader',
            'css-loader',
            'postcss-loader'
        ],
        exclude: /node_modules$/
    }
]

```