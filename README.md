####  使用说明
###### JS组件调用
import DuWrap from 'react-deltaui/src/components/DuWrap';

###### CSS组件无需手动引用

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

####  版本升级说明
v1.3 list组件样式升级，列表项由分为(hd/bd/ft)3部分组成 before改成bd after改为ft
- list组件 去除duitembdpaddingright,增加duitemftpaddingleft、duItemSideHdWidth、duItemFontSize、duItemColor属性
- input,select,textarea的字体,颜色,字号继承body样式
