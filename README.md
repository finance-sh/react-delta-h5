
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

JS组件调用
```javascript
import DuWrap from 'react-deltaui/src/components/DuWrap';
```

CSS组件无需手动引用

> 业务代码中的className勿用`du`开头命名 
> 开发勿使用标签定义样式


####  版本升级说明
 v1.3
> list组件样式升级，列表项由分为(hd/bd/ft)3部分组成 before改成bd after改为ft
 > list组件 去除duitembdpaddingright,增加duitemftpaddingleft、duItemSideHdWidth、duItemFontSize、duItemColor属性
> input,select,textarea的字体,颜色,字号继承body样式

v1.3.1 
> 增加duItemSideFtAlignItems属性,去除duItemSidePaddingRight属性
> 组件按钮FontSize修改为Size
> 表单组件增加一些样式

v1.3.2 
> 修改duItemIconFontSize变量
> 表单组件增加单个panel样式及模拟placeholder相关交互、并转成ES6

v1.3.3
> 

v1.3.4 
> 表单增加错误图标 

v1.3.5
> 表单格式化、修改RMB图标
> loading组件文字可配置

v1.3.6
> Form增加duFormPlaceHolderFontSize配置

v1.3.7
> 格式化variable文件
> form配置修改引用顺序

>1.3.8 
> 兼容react嵌套多一层div时，图标垂直居中