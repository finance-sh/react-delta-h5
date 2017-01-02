/**
 * Created by delta
 */

import React from 'react';
import Header from '../../components/WrcHeader';
import DuWrap from '../../components/WrcDuWrap';
// 非UI框架引用
import style from './Header.useable.duss';
import SystemHeader from '../../components/system/SystemHeader/SystemHeader';
import SystemWrap from '../../components/system/SystemWrap/SystemWrap';

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
                <DuWrap>
                    <SystemWrap pageName="Header">
                        <div className="case-1">
                            <Header title="百度钱包" suppleTitle="分享" backEvent={this.backEvent} suppleHandle={this.suppleHandle} />
                        </div>
                        <div className="case-2">
                            <Header title="百度" />
                        </div>
                        <div className="case-3">
                            <SystemHeader title="钱包" returnBtnDisplay={false} />
                        </div>
                    </SystemWrap>
                </DuWrap>
            </div>
        );
    }
});

module.exports = HeaderPage;