/**
 * Created by delta
 */

export default [
    {
        path: '/',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Index/Index.jsx'));
            }, 'index');
        },
        onEnter: function () {   
        }
    },
    {
        path: 'button',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Button/Button.jsx'));
            }, 'button');
        },
        onEnter: function () {  
        }
    },
    {
        path: 'list',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/List/List.jsx'));
            }, 'list');
        },
        onEnter: function () {  
        }
    },
    {
        path: 'panel',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Panel/Panel.jsx'));
            }, 'panel');
        },
        onEnter: function () { 
        }
    },
    {
        path: 'flex',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Flex/Flex.jsx'));
            }, 'flex');
        },
        onEnter: function () { 
        }
    },
    {
        path: 'header',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Header/Header.jsx'));
            }, 'header');
        },
        onEnter: function () { 
        }
    },
    {
        path: 'footer',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Footer/Footer.jsx'));
            }, 'footer');
        },
        onEnter: function () { 
        }
    },
    {
        path: 'toast',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Toast/Toast.jsx'));
            }, 'toast');
        },
        onEnter: function () { 
        }
    },
    {
        path: 'dialog',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Dialog/Dialog.jsx'));
            }, 'dialog');
        },
        onEnter: function () { 
        }
    },
    {
        path: 'loading',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Loading/Loading.jsx'));
            }, 'loading');
        },
        onEnter: function () {
        }
    },
    {
        path: 'tabBar',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/TabBar/TabBar.jsx'));
            }, 'tabBar');
        },
        onEnter: function () {
        }
    },
    {
        path: 'actionSheet',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/ActionSheet/ActionSheet.jsx'));
            }, 'actionSheet');
        },
        onEnter: function () {
        }
    },
    {
        path: 'form',
        getComponent: function (nextState, cb) {
            require.ensure([], function (require) {
                cb(null, require('./page/Form/Form.jsx'));
            }, 'form');
        },
        onEnter: function () {
        }
    },
    {
        path: '*', // 添加其他路由在此路由设置上方，保证这个设置在最下方
        onEnter: function (nextState, replace) {
            // 如果是其他路由则跳转到首页
            replace('/');
        }
    }
];