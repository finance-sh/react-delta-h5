/**
 * @file   首页
 * @author zhong
 */

import React from 'react';
import Link from 'react-router/lib/Link';

import style from './Index.useable.less';
import SystemHeader from '../../components/system/Header/Header';

const IndexPage = React.createClass({

    componentWillMount: function () {
        style.use();
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function () {
        style.unuse();
    },
    render: function () {
        var that = this;
        {/** 
            <div className="du-page-index">     'du-page-index'中index: 页面标识 
            <section className="index-section">  className="页面标识-section" 
         **/}
        return (
            
            <div className="du-page-index">

                <SystemHeader returnBtnDisplay={false} />

                <div className="du-page-bd">
                    <div className="du-page-bd-inner">
                        <section className="index-section">
                            <div className="delta-bx">
                                <h2 className="delta-hd">Delta UI</h2>
                                <div className="delta-bd">
                                    <div className="group">

                                        <div className="col"><Link to="/button"><i className="du-system-iconfont du-system-icon-button"></i>button</Link></div>
                                        <div className="col"><Link to="/list"><i className="du-system-iconfont du-system-icon-list"></i>list</Link></div>
                                        <div className="col"><Link to="/panel"><i className="du-system-iconfont du-system-icon-panel"></i>panel</Link></div>
                                        <div className="col"><Link to="/flex"><i className="du-system-iconfont du-system-icon-layout"></i>flex</Link></div>
                                        <div className="col"><Link to="/tabBar"><i className="du-system-iconfont du-system-icon-tabbar"></i>tabBar</Link></div>
                                        <div className="col"><Link to="/footer"><i className="du-system-iconfont du-system-icon-footer"></i>footer</Link></div>

                                        <div className="col"><Link to="/header"><i className="du-system-iconfont du-system-icon-header"></i>header</Link></div>
                                        <div className="col"><Link to="/loading"><i className="du-system-iconfont du-system-icon-loading"></i>loading</Link></div>
                                        <div className="col"><Link to="/dialog"><i className="du-system-iconfont du-system-icon-dialog"></i>dialog</Link></div>
                                        <div className="col"><Link to="/toast"><i className="du-system-iconfont du-system-icon-toast"></i>toast</Link></div>

                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </div>
        );
    }
});

module.exports = IndexPage;