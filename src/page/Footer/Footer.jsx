/**
 * Created by delta
 */

import React from 'react';
import DuWrap from '../../components/WrcDuWrap';
// 非UI框架引用
import style from './Footer.useable.duss';
import SystemHeader from '../../components/system/SystemHeader/SystemHeader';
import SystemWrap from '../../components/system/SystemWrap/SystemWrap';

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
                <DuWrap>
                    <SystemWrap pageName="Footer">
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
                    </SystemWrap>
                </DuWrap>
            </div>
        );
    }
});

module.exports = FooterPage;