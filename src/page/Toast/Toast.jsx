/**
 * @file   Toast模块
 * @author zhong
 */

import React from 'react';
import style from './Toast.useable.less';
import SystemHeader from '../../components/system/Header/Header';
import Toast from '../../components/WrcToast/lib/WrcToast';

const ToastPage = React.createClass({

    componentWillMount: function () {
        style.use();
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function () {
        style.unuse();
    },
    case1: function () {
        Toast('百度钱包一个能返现金的钱包',1000);
    },
    case2: function () {
        Toast('百度钱包是由百度所创办是中国领先的在线支付应用和服务平台',2000);
    },
    render: function () {
        var that = this;
        return (
            <div className="du-page-toast">
                <SystemHeader />
                <div className="du-page-bd">
                    <div className="du-page-bd-inner">

                        <section className="toast-section">
                            <div className="delta-bx">
                                <h2 className="delta-hd">Toast</h2>
                                <div className="delta-bd">
                                    <div className="case-1">
                                        <a href="javascript:void(0)" onClick={this.case1} className="du-button du-button-danger">单行</a>
                                        <a href="javascript:void(0)" onClick={this.case2} className="du-button du-button-danger">多行</a>
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

module.exports = ToastPage;