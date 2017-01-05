##REACT Delta

####  webpack 配置
```javascript
npm install precss postcss-import autoprefixer --save-dev

// postcss
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var atImport = require('postcss-import');

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
            'px-rem',
            'postcss-loader'
        ]
    }
]

```

####  使用说明
###### JS组件调用
import DuWrap from 'react-deltaui/src/components/DuWrap';

###### CSS组件无需手动调用