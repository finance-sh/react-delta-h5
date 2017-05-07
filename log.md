### 2017

2017/1/2 - 2017/1/6

1.  调整预编译工具,less改换为基于postcss的precss
2.  因为预编译工具调整，less改换类似sass的语法
3.  为兼容不同平台css将原.less后缀全部改换为.duss
4.  格式化全部css文件
6.  precss引用的postcss-partial-import为引起hot失效,导致无法自动刷新,
    手动引用postcss-import并配置前置解决了此问题
7.  优化adaptive从NPM引入
8.  去除wrc开头文件

2017/1/3

09. 头部suppleTitle增加dangerouslySetInnerHTML属性
10. 开发postcss插件替换变量
11. 规范变量命名

-----------------------------------------------------------------------

配置imoport插件
开发表单样式
编码es6转es5  
开发发布脚本
规范编码

替换项目中变量

-----------------------------------------------
dialog.duss增加 $duDialogHdColor: #333;
                duDialogHBdFontSize 修改为 duDialogHd2BdFontSize
           增加 font-size: $duDialogHdFontSize;
-----------------------------------------------
$duLoadingFontSize改为$duLoadingTextFontSize
-----------------------------------------------
duItemIconFontSize  duItemIconColor
$duItemPaddingRight改为 duItemBeforePaddingRight
-----------------------------------------------
$duPanelLineColor
duPanelBackGroundColor
duPanelHdBackGroundColor
-----------------------------------------------
duTabbarSelectLabelColor -> duTabbarItemSelectLabelColor
duTabBarbackGroundColor -> duTabBarBackGroundColor
buttonFont -> Font

-----------------------------------------------

2017/1/7
1. list组件去除item-start  du-item-column 优化树形排列实现
2. lsit组件样式升级，列表项由分为(hd/bd/ft)3部分组成 before改成bd after改为ft
修改变量duitembeforepaddingright
去除duitembdpaddingright 增加duitemftpaddingleft
3. 增加duItemSideHdWidth
4. duitem li改换用div
5. duitem 增加 $duItemFontSize duItemColor
6. 增加form 配置文件
7. 表单input select textarea 字体 颜色 字号继承body样式

2017/1/9
1. side-list添加多行显示样式
2. 增加duItemSideFtAlignItems属性,去除duItemSidePaddingRight属性
3. 组件按钮FontSize修改为Size
4. 表单组件增加一些样式
2017/1/10
1. 增加form unit style
2. 修改duItemIconFontSize
*. header act 不存在移除节点
*. precss - 调用未声明变量没有提示报错  增加csslint

*. 开发检查工具 查找delta编译后带'$'value值报错提示
*. precss 没有css运算处理

* 2017/1/12
1. loading组件文字可配置

2017/1/16
调整FORM表单初始化样式
Form增加duFormPlaceHolderFontSize配置

2017/01/22
兼容react嵌套多一层div时，图标垂直居中
Header add isDisplay

2017/02/08
修复国产手机出现图标被截问题

2017/04/26
移除base.duss html,body{height:100%}

2017/05/07
更改loading转菊花图片
Toast支持隐藏后回调











precss: {         
    'import': {
        prefix: ''
    }
},