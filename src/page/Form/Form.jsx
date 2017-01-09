/**
 * Created by delta
 */

import React from 'react';
import DuWrap from '../../components/DuWrap';
// 非UI框架引用
import style from './Form.useable.duss';
import SystemHeader from '../../components/system/SystemHeader/SystemHeader';
import SystemWrap from '../../components/system/SystemWrap/SystemWrap';

const FormPage = React.createClass({

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
            <div className="du-page-form">
                <SystemHeader />
                <DuWrap>
                    <SystemWrap pageName="Form">

                        <div className="du-panel">
                            <div className="du-panel-bd">

                                <div className="du-form">
                                    <div className="du-form-item">
                                        <div className="du-form-hd">标题</div>
                                        <a href="javascript:void(0)">
                                            <div className="du-form-bd"><span className="du-form-placeholder">Link标签</span></div>
                                            <div className="du-form-ft"><span className="du-iconfont du-icon-arrow-right-thick"></span></div>
                                        </a>
                                    </div>
                                    <div className="du-form-tip du-form-tip-error">验证提示</div>
                                </div>

                                <div className="du-form">
                                    <div className="du-form-item">
                                        <div className="du-form-hd">标题</div>
                                        <div className="du-form-bd"><input className="du-form-input" type="text" placeholder="说明文字" /></div>
                                    </div>
                                    <div className="du-form-tip du-form-tip-error">验证提示</div>
                                </div> 

                                <div className="du-form">
                                    <div className="du-form-item">
                                        <div className="du-form-hd">标题</div>
                                        <div className="du-form-bd"><input className="du-form-input" type="text" placeholder="说明文字" /></div>
                                    </div>
                                    <div className="du-form-tip"></div>
                                </div>       

                            </div>
                        </div>

                        <div className="du-panel">
                            <div className="du-panel-bd">

                                <div className="du-form">
                                    <div className="du-form-item">
                                        <div className="du-form-hd">标题</div>
                                        <div className="du-form-bd"><input className="du-form-input" type="text" placeholder="说明文字" /></div>
                                    </div>
                                </div> 

                            </div>
                        </div>

                    </SystemWrap>
                </DuWrap>
            </div>
        );
    }
});

module.exports = FormPage;