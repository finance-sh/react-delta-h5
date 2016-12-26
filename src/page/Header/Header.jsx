/**
 * @file   Header模块
 * @author zhong
 */

import React from 'react';
import Header from '../../components/WrcHeader';
import Wrap from '../../components/WrcWrap';

import style from './Header.useable.less';
import SystemHeader from '../../components/system/Header/Header';

const HeaderPage = React.createClass({

    componentWillMount: function () {
        style.use();
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function () {
        style.unuse();
    },
    backEvent: function() {
        alert('返回上一页');
    },
    suppleHandle: function() {
        alert('分享');
    },
    render: function () {
        var that = this;
        return (
            <div className="du-page-header">
                <SystemHeader />
                <Wrap>
                    <section className="header-section">
                        <div className="delta-bx">
                            <h2 className="delta-hd">Header</h2>

                            <div className="delta-bd">

                                <div className="case-1">
                                    <Header title="百度钱包" suppleTitle="分享" backEvent={this.backEvent} suppleHandle={this.suppleHandle} />
                                </div>

                                <div className="case-2">
                                    <Header title="百度" />
                                </div>

                                <div className="case-3">
                                    <SystemHeader title="钱包" returnBtnDisplay={false} />
                                </div>

                            </div>

                        </div>
                    </section>
                </Wrap>
            </div>
        );
    }
});

module.exports = HeaderPage;