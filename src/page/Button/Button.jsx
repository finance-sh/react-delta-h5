/**
 * Created by delta
 */

import React from 'react';
import DuWrap from '../../components/DuWrap';
// 非UI框架引用
import style from './Button.useable.duss';
import SystemHeader from '../../components/system/SystemHeader/SystemHeader';
import SystemWrap from '../../components/system/SystemWrap/SystemWrap';

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
                <DuWrap>
                    <SystemWrap pageName="Button">
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
                    </SystemWrap>
                </DuWrap>
            </div>
        );
    }
});

module.exports = ButtonPage;