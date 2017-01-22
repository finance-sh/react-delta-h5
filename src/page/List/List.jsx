/**
 * Created by delta
 */

import React from 'react';
import DuWrap from '../../components/DuWrap';
// 非UI框架引用
import style from './List.useable.duss';
import SystemHeader from '../../components/system/SystemHeader/SystemHeader';
import SystemWrap from '../../components/system/SystemWrap/SystemWrap';

const ListPage = React.createClass({

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
            <div className="du-page-list">
                <SystemHeader />
                <DuWrap>
                    <SystemWrap pageName="List">
                    
                        <div className="du-panel">
                            <div className="du-panel-hd">
                                A
                            </div>
                            <div className="du-panel-bd">
                                <div className="du-item du-item-link">
                                    <a href="#">
                                        <div className="du-item-bd">标题-带链接</div>
                                        <div className="du-item-ft"><span>说明</span></div>
                                    </a>
                                </div>
                                <div className="du-item du-item-link">
                                    <a href="#">
                                        <div className="du-item-bd">标题-带链接</div>
                                        <div className="du-item-ft"><span>说明</span></div>
                                    </a>
                                </div>
                                <div className="du-item du-item-link">
                                    <a href="#" className="">
                                        <div className="du-item-bd">标题-带链接</div>
                                        <div className="du-item-ft"><span className="du-iconfont du-icon-arrow-right-thick"></span></div>
                                    </a>
                                </div>
                                <div className="du-item du-item-link">
                                    <a href="#" className="">
                                        <div className="du-item-bd">标题-带链接</div>
                                        <div className="du-item-ft"><span className="du-iconfont du-icon-arrow-right-thick"></span></div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="du-panel">
                            <div className="du-panel-hd">
                                B
                            </div>
                            <div className="du-panel-bd">
                                <div className="du-item">
                                    <div className="du-item-bd">标题-无链接</div>
                                    <div className="du-item-ft">说明</div>
                                </div>
                                <div className="du-item">
                                    <div className="du-item-bd">标题-无链接</div>
                                </div>
                                <div className="du-item">
                                    <div className="du-item-bd">标题-无链接</div>
                                    <div className="du-item-ft">说明</div>
                                </div>
                                <div className="du-item">
                                    <div className="du-item-bd">标题-无链接</div>
                                </div>
                            </div>
                        </div>

                        <div className="du-panel">
                            <div className="du-panel-hd">
                                C
                            </div>
                            <div className="du-panel-bd">
                                <div className="du-item du-item-side">
                                    <div className="du-item-hd">标题</div>
                                    <a href="javascript:void(0)">
                                        <div className="du-item-bd">说明文字</div>
                                        <div className="du-item-ft"><span className="du-iconfont du-icon-arrow-right-thick"></span></div>
                                    </a>
                                </div>
                                <div className="du-item du-item-side">
                                    <div className="du-item-hd">标题</div>
                                    <a href="javascript:void(0)">
                                        <div className="du-item-bd">说明文字</div>
                                        <div className="du-item-ft"><span className="du-iconfont du-icon-arrow-right-thick"></span></div>
                                    </a>
                                </div>
                                <div className="du-item du-item-side">
                                    <div className="du-item-hd">标题</div>
                                    <div className="du-item-bd">说明文字</div>
                                </div>
                                <div className="du-item du-item-side">
                                    <div className="du-item-hd">标题</div>
                                    <div className="du-item-bd">说明文字</div>
                                </div>
                            </div>
                        </div>

                        <div className="du-panel">
                            <div className="du-panel-hd">
                                D
                            </div>
                            <div className="du-panel-bd">

                                <div className="du-item du-item-side">
                                    <div className="du-item-hd">标题</div>
                                    <div className="du-item-bd">
                                        <div className="case1">文字主题,文字主题</div>
                                        <div className="case1">文字主题</div>
                                    </div>
                                    <div className="du-item-ft">
                                        <div className="case1">水平方向</div>
                                        <div className="case1">说明</div>
                                    </div>
                                </div>

                                <div className="du-item du-item-side">
                                    <div className="du-item-hd">标题</div>
                                    <div className="du-item-bd">
                                        <div className="case1">文字主题,文字主题</div>
                                        <div className="case1">文字主题</div>
                                    </div>
                                    <div className="du-item-ft">
                                        <div className="case1">水平方向</div>
                                        <div className="case1">说明</div>
                                    </div>
                                </div>

                                <div className="du-item du-item-side">
                                    <div className="du-item-hd">标题</div>
                                    <div className="du-item-bd">
                                        <div className="case1">文字主题,文字主题</div>
                                        <div className="case1">文字主题</div>
                                    </div>
                                    <div className="du-item-ft">
                                        <div className="case1">水平方向</div>
                                        <div className="case1">说明</div>
                                    </div>
                                </div>
                                
                                <div className="du-item du-item-side">
                                    <div className="du-item-hd">标题</div>
                                    <div className="du-item-bd">
                                        <div className="case1">文字主题,文字主题</div>
                                        <div className="case1">文字主题</div>
                                    </div>
                                    <div className="du-item-ft">
                                        <div className="case1">水平方向</div>
                                        <div className="case1">说明</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="du-panel">
                            <div className="du-panel-hd">
                                E
                            </div>
                            <div className="du-panel-bd">
                                <div className="du-item">
                                    <div className="du-item-bd">
                                        <div>标题</div>
                                        <div>文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                    </div>
                                    <div className="du-item-ft">
                                        <span>说明</span> 
                                        <span className="du-iconfont du-icon-arrow-right-thick"></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="du-panel">
                            <div className="du-panel-hd">
                                F
                            </div>
                            <div className="du-panel-bd">

                                <div className="du-item du-item-column">
                                    <div className="case1">标题</div>
                                    <div className="case2">文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                </div>
                                <div className="du-item du-item-column">
                                    <div className="case1">标题</div>
                                    <div className="case2">文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                </div>
                                <div className="du-item du-item-column">
                                    <div className="case1">标题</div>
                                    <div className="case2">文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                </div>
                                <div className="du-item du-item-column">
                                    <div className="case1">标题</div>
                                    <div className="case2">文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                </div>
                            </div>
                        </div>

                    </SystemWrap>
                </DuWrap>
            </div>
        );
    }
});

module.exports = ListPage;