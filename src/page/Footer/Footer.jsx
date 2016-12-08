/**
 * @file   Footer模块
 * @author zhong
 */

import React from 'react';
import style from './Footer.useable.less';
import SystemHeader from '../../components/system/Header/Header';

const FooterPage = React.createClass({

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
        return (
            <div className="du-page-footer">

                <SystemHeader />

                <div className="du-page-bd">
                    <div className="du-page-bd-inner">

                        <section className="footer-section">
                            <div className="delta-bx">
                                <h2 className="delta-hd">Footer</h2>
                                <div className="delta-bd">
                                    <div className="case-1">
                                        <div className="du-footer">
                                            <p className="du-footer-text">Copyright &copy; 2008-2016</p>
                                        </div>

                                        <div className="du-footer">
                                            <p className="du-footer-links">
                                                <a href="javascript:void(0);" className="du-footer-link">底部链接</a>
                                            </p>
                                            <p className="du-footer-text">Copyright &copy; 2008-2016</p>
                                        </div>

                                        <div className="du-footer">
                                            <p className="du-footer-links">
                                                <a href="javascript:void(0);" className="du-footer-link">底部链接</a>
                                                <a href="javascript:void(0);" className="du-footer-link">底部链接</a>
                                            </p>
                                            <p className="du-footer-text">Copyright &copy; 2008-2016</p>
                                        </div>
                                    </div>

                                    <div className="case-2">
                                        <div className="du-footer du-footer-fixed-bottom">
                                            <p className="du-footer-links">
                                                <a href="javascript:void();" data-event="return" className="du-footer-link">首页</a>
                                            </p>
                                            <p className="du-footer-text">Copyright &copy; 2008-2016</p>
                                        </div>
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

module.exports = FooterPage;