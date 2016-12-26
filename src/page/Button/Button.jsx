/**
 * @file   Button模块
 * @author zhong
 */

import React from 'react';
import Wrap from '../../components/WrcWrap';

import style from './Button.useable.less';
import SystemHeader from '../../components/system/Header/Header';

const ButtonPage = React.createClass({

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
            <div className="du-page-button">
                <SystemHeader />
                <Wrap>
                    <section className="button-section">
                        <div className="delta-bx">
                            <h2 className="delta-hd">Button</h2>
                            <div className="delta-bd">

                                <a href="javascript:void(0)" className="du-button du-button-default">Default按钮</a>
                                <a href="javascript:void(0)" className="du-button du-button-default du-button-disabled">Default disable按钮</a>

                                <a href="javascript:void(0)" className="du-button du-button-primary">Primary按钮</a>
                                <a href="javascript:void(0)" className="du-button du-button-primary du-button-disabled">Primary disable按钮</a> 

                                <a href="javascript:void(0)" className="du-button du-button-danger">Danger按钮</a>
                                <a href="javascript:void(0)" className="du-button du-button-danger du-button-disabled">Danger disable按钮</a>

                                <a href="javascript:void(0)" className="du-button du-button-hollow-default">Default按钮</a>
                                <a href="javascript:void(0)" className="du-button du-button-hollow-default du-button-disabled">Default disable按钮</a>

                                <a href="javascript:void(0)" className="du-button du-button-hollow-primary">Primary按钮</a>
                                <a href="javascript:void(0)" className="du-button du-button-hollow-danger">Danger按钮</a>

                                <div className="case-1">
                                    <a href="javascript:void(0)" className="du-button du-button-mini du-button-default">小按钮 H:60</a>
                                    <a href="javascript:void(0)" className="du-button du-button-default">默认按钮 H:70</a>
                                    <a href="javascript:void(0)" className="du-button du-button-large du-button-default">大按钮 H:100</a>
                                </div>
                                <div className="case-2">
                                    <a href="javascript:void(0)" className="du-button du-button-inline du-button-mini du-button-default">自定义宽</a>
                                    <a href="javascript:void(0)" className="du-button du-button-inline du-button-mini du-button-danger">自定义宽</a>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </Wrap>
            </div>
        );
    }
});

module.exports = ButtonPage;