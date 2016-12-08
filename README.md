###fetch文档
```
https://www.npmjs.com/package/whatwg-fetch
```

###emitter文档
```
https://www.npmjs.com/package/event-emitter
```

###后端接口文档


###启动方式
```
npm install
npm run dev
```
###打包
```
windows: npm run winBuild
mac/linux: npm run build
```
####git 拉取和push到远程

- 拉取远程1-0-0_BRANCH分支
    ```
    git pull --rebase origin 1-0-0_BRANCH
    ```
- 用上面的方式拉远程分支若出现冲突, 查看冲突文件, 并解决冲突后, 按如下执行
    ```
    git add .
    git rebase --continue
    ```
- 本地修改后提交的基本操作
    ```
    git add . //将所有改动加索引
    git commit -m "message" //提交到本地, 下面push到远程
    ```
- 提交到远程1-0-0_BRANCH分支, push之前先拉取更新
    ```
    git push
    ```
####Page中引用样式的注意事项
webpack的```style-loader```会将样式插入到```<style>```中，所以会有样式覆盖的风险。

- 在写样式选择器时候，注意选择器的应用范围
- 将样式命名为```example.useable.less```，在对应的页面中使用```var exampleStyle = require('example.useable.less');```引入样式依赖。在页面组件中使用方法为:
    ```
    var Page = React.createClass({
        componentWillMount: function() {
            exampleStyle.use();
        },
        componentWillUnmount: function() {
            exampleStyle.unuse();
        }
    });
    ```
    使用这个方法，可以在页面渲染时，加入样式，在页面组件从DOM卸载的时候会删除当前引入的样式。


###命名规则
```
项目文件/夹命名：驼峰
JSX文件/夹命名：首字母大写 
```