/**
 * Created by delta
 */

import React from 'react';
import withRouter from 'react-router/lib/withRouter';
import '../../Header/lib/Header.duss';

var Header = React.createClass({
    getDefaultProps: function() {
        return {
            suppleTitle: '',
            title: 'Delta UI',
            isDisplay: true,
            returnBtnDisplay: true,
            suppleHandle: function() {}
        }
    },
    backEvent: function(e) {
        e.preventDefault();
        if(this.props.backEvent){
            this.props.backEvent();
        }
        else {
            this.props.router.goBack();
        }
    },
    suppleEvent: function(e) {
        e.preventDefault();
        this.props.suppleHandle();
    },
    render: function() {
        var returnNode = '';
        var headerTPL;

        if (!this.props.isDisplay) {
            return null;
        }

        if(this.props.returnBtnDisplay) {
            returnNode = (
                <a title="返回" className="du-header-return" href="javascript:void(0)" onClick={this.backEvent}><i className="du-iconfont du-icon-arrow-left-thick"></i></a>
            )
        };
        headerTPL = (
            <header className="du-page-hd">
                <h1 className="du-header-title">{this.props.title}</h1>
                {returnNode}
                <a className="du-header-act" href="javascript:void(0)" onClick={this.suppleEvent}>{this.props.suppleTitle}</a>
            </header>
        );
        return headerTPL;
    }
});

module.exports = withRouter(Header);