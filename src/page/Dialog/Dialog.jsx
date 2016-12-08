/**
 * @file   按钮模块
 * @author zhong
 */

import React from 'react';
import style from './Dialog.useable.less';
import SystemHeader from '../../components/system/Header/Header';

import Dialog from '../../components/WrcDialog/lib/WrcDialog';

const DialogPage = React.createClass({
    componentWillMount: function () {
        style.use();
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function () {
        style.unuse();
    },
    case1: function () {
        Dialog(
            <div>  
                <div className="du-dialog-hd">提示</div>
                <div className="du-dialog-bd">
                    大家太过热请，收银台正在排队中，请再次重试吧
                </div>
                <div className="du-dialog-ft">
                    <a href="javascript:void(0)" className="du-dialog-btn du-dialog-btn-primary sure">我知道了</a>
                    <a href="javascript:void(0)" className="du-dialog-btn du-dialog-btn-default cancel">取消</a>
                </div>
            </div>
        );
    },
    case2: function () {
        Dialog(
            <div>  
                <div className="du-dialog-bd">
                    一个能返现金的钱包
                </div>
                <div className="du-dialog-ft">
                    <a href="javascript:void(0)" className="du-dialog-btn du-dialog-btn-primary sure">我知道了</a>
                </div>
            </div>
        );
    },
    case3: function () {
        Dialog(
            <div>  
                <div className="du-dialog-bd" style={{textAlign:'left'}}>
                    百度钱包是由百度所创办中国领先的在线支付应用和服务平台。
                </div>
                <div className="du-dialog-ft">
                    <a href="javascript:void(0)" className="du-dialog-btn du-dialog-btn-primary sure">我知道了</a>
                </div>
            </div>
        );
    },    
    render: function () {
        var that = this;
        return (
            <div className="du-page-dialog">

                <SystemHeader />

                <div className="du-page-bd">
                    <div className="du-page-bd-inner">

                        <section className="dialog-section">

                            <div className="delta-bx">
                                <h2 className="delta-hd">Dialog</h2>
                                <div className="delta-bd">
                                    <div className="case-1">
                                        <a href="javascript:void(0)" className="du-button du-button-danger" onClick={this.case1}>confirm</a>
                                        <a href="javascript:void(0)" className="du-button du-button-danger" onClick={this.case2}>alert</a>
                                        <a href="javascript:void(0)" className="du-button du-button-danger" onClick={this.case3}>alert 多行</a>
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

module.exports = DialogPage;