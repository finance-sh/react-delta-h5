/**
 * Created by delta
 * --------------------------------------------
 * options {object}
 * options.type {string} loading dialog
 * options.cancelFun {function} 取消按钮回调方法
 * options.sureFun {function} 确认按钮回调方法
 * options.addClassname {string} 额外的类名
 * options.html {jsx} 插入的html片段  
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './Layer.duss';

var OlayComponent = React.createClass({
    componentDidMount: function() {
        window.scrollTo(0, 0);
        this.refs.layerShade.style.height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) + 'px';
    },
    handleClick: function(evt) {
        var target = evt.target;
        if (target.classList.contains('sure')) {
            this.props.closeLayer && this.props.closeLayer();
            this.props.surefun && this.props.surefun();
        }
        else if (target.classList.contains('cancel')) {
            this.props.closeLayer && this.props.closeLayer();
            this.props.cancelfun && this.props.cancelfun();
        }
        else if (target.classList.contains('close')) {
            this.props.closeLayer && this.props.closeLayer();
        }
    },
    render: function() {
        var className = '';
        if (this.props.type === 'loading') {
            className = 'du-loading-shade';
        }
        else if (this.props.type === 'dialog') {
            className = 'du-dialog-shade';
        }
        if (this.props.addClassname) {
            className += ' ' + this.props.addClassname
        }
        return (
            <div className={className} ref="layerShade" onClick={this.handleClick}>
                <LayerComponent {...this.props} type={this.props.type} />
            </div>
        );
    }
});
var LayerComponent = React.createClass({
    componentDidMount: function() {
        this.refs.layer.style.visibility = '';
    },
    render: function() {
        if (this.props.type === 'loading') {
            return (
                <div className="du-loading" ref="layer">
                    <div className="du-loading-bd">
                        <LoadingIconComponent />
                        <LoadingTxtComponent loadingText={this.props.text} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="du-dialog" ref="layer">
                {
                    React.Children.map(this.props.children, function (child) {
                        return child;
                    })
                }
                </div>
            );
        }
    }
});
var LoadingIconComponent = React.createClass({
    render: function() {
        return (
            <div className="du-iconimg du-iconimg-loading du-loading-snake"></div>
        );
    }
});
var LoadingTxtComponent = React.createClass({
    render: function() {
        return (
            <div className="du-loading-text">{this.props.loadingText}</div>
        );
    }
});
var ToastComponent = React.createClass({
    componentDidMount: function() {
        setTimeout(function() {
            this.props.closeLayer && this.props.closeLayer();
        }.bind(this), this.props.outTime);
        this.refs.toastShade.style.height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) + 'px';
    },
    componentWillUnmount: function() {
        this.props.surefun && this.props.surefun();
    },
    render: function() {
        return (
            <div className="du-toast-shade" ref="toastShade">
                <div className="du-toast">
                    <div className="du-toast-bd">{this.props.toastStr}</div>
                </div>
            </div>
        )
    }
});
function Layer(options) {
    var layerRootDom = document.createElement('div');
    layerRootDom.id = 'layerRoot' + Date.now();
    document.body.appendChild(layerRootDom);

    var closeLayer = function() {
        if (layerRootDom) {
            ReactDOM.unmountComponentAtNode(layerRootDom);
            layerRootDom.parentNode.removeChild(layerRootDom);
            layerRootDom = null;
        }
    };
    if (options.type === 'toast') {
        ReactDOM.render(
            <ToastComponent outTime={options.outTime || 2000} toastStr={options.toastStr} closeLayer={closeLayer} surefun={options.sureFun}/>,
            layerRootDom
        );
    }
    else if (options.type === 'loading') {
        var loadingText = options.text;
        ReactDOM.render (
            <OlayComponent type="loading" text={loadingText} />,
            layerRootDom
        );
    }
    else if (options.type === 'dialog') {
        ReactDOM.render (
            <OlayComponent type="dialog" addClassname={options.addClassname} surefun={options.sureFun} cancelfun={options.cancelFun} rootdom={layerRootDom} closeLayer={closeLayer}>
                {options.html}
            </OlayComponent>,
            layerRootDom
        );
    }
    else {
        ReactDOM.render (
            <OlayComponent>
                {options.html}
            </OlayComponent>,
            layerRootDom
        );
    }
    this.closeLayer = closeLayer;
}
export default Layer;