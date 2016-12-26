/**
 * @file   List模块
 * @author zhong
 */

import React from 'react';
import Wrap from '../../components/WrcWrap';

import style from './List.useable.less';
import SystemHeader from '../../components/system/Header/Header';

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
                <Wrap>
                    <section className="list-section">
                        <div className="delta-bx">
                            <h2 className="delta-hd">List</h2>
                            <div className="delta-bd">
                                <div className="du-panel">
                                    <div className="du-panel-hd">
                                        A
                                    </div>
                                    <div className="du-panel-bd">
                                        <ul className="du-list">
                                            <li className="du-item du-item-link">
                                                <a href="#">
                                                    <div className="du-item-before">标题-带链接</div>
                                                    <div className="du-item-after"><span>说明</span></div>
                                                </a>
                                            </li>
                                            <li className="du-item du-item-link">
                                                <a href="#">
                                                    <div className="du-item-before">标题-带链接</div>
                                                    <div className="du-item-after"><span>说明</span></div>
                                                </a>
                                            </li>
                                            <li className="du-item du-item-link">
                                                <a href="#" className="">
                                                    <div className="du-item-before">标题-带链接</div>
                                                    <div className="du-item-after"><span className="du-iconfont du-icon-arrow-right"></span></div>
                                                </a>
                                            </li>
                                            <li className="du-item du-item-link">
                                                <a href="#" className="">
                                                    <div className="du-item-before">标题-带链接</div>
                                                    <div className="du-item-after"><span className="du-iconfont du-icon-arrow-right"></span></div>
                                                </a>
                                            </li>
                                            <li className="du-item du-item-link">
                                                <a href="#">
                                                    <div className="du-item-before">标题-带链接 标题文字长度很长长度很长长度很长长度很长</div>
                                                    <div className="du-item-after">
                                                        <span>说明</span> 
                                                        <span className="du-iconfont du-icon-arrow-right"></span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="du-panel">
                                    <div className="du-panel-hd">
                                        B
                                    </div>
                                    <div className="du-panel-bd">
                                        <ul className="du-list">
                                            <li className="du-item">
                                                <div className="du-item-before">标题-无链接</div>
                                                <div className="du-item-after"><span className="du-iconfont du-icon-arrow-right"></span></div>
                                            </li>
                                            <li className="du-item">
                                                <div className="du-item-before">标题-无链接</div>
                                            </li>
                                            <li className="du-item">
                                                <div className="du-item-before">标题-无链接</div>
                                            </li>
                                            <li className="du-item">
                                                <div className="du-item-before">标题-无链接</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="du-panel">
                                    <div className="du-panel-hd">
                                        C
                                    </div>
                                    <div className="du-panel-bd">
                                        <ul className="du-list">

                                            <li className="du-item du-item-side">
                                                <div className="du-item-before">标题</div>
                                                <div className="du-item-after"><span>说明文字</span></div>
                                            </li>
                                            <li className="du-item du-item-side">
                                                <div className="du-item-before">标题</div>
                                                <div className="du-item-after"><span>说明文字</span></div>
                                            </li>
                                            <li className="du-item du-item-side">
                                                <div className="du-item-before">标题</div>
                                                <div className="du-item-after"><span>说明文字</span></div>
                                            </li>
                                            <li className="du-item du-item-side">
                                                <div className="du-item-before">标题</div>
                                                <div className="du-item-after"><span>说明文字</span></div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="du-panel">
                                    <div className="du-panel-hd">
                                        D
                                    </div>
                                    <div className="du-panel-bd">
                                        <ul className="du-list">

                                            <li className="du-item">
                                                <div className="du-item-before">
                                                    <div>标题</div>
                                                    <div>文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                                </div>
                                                <div className="du-item-after">
                                                    <span>说明</span> 
                                                    <span className="du-iconfont du-icon-arrow-right"></span>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="du-panel">
                                    <div className="du-panel-hd">
                                        E
                                    </div>
                                    <div className="du-panel-bd">
                                        <ul className="du-list">
                                            <li className="du-item du-item-start">
                                                <div className="du-item-before">
                                                    <div>标题</div>
                                                    <div>文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                                </div>
                                                <div className="du-item-after">
                                                    <span>说明</span> 
                                                    <span className="du-iconfont du-icon-arrow-right"></span>
                                                </div>
                                            </li>                    
                                            <li className="du-item du-item-start">
                                                <div className="du-item-before">
                                                    <div>标题</div>
                                                    <div>文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                                </div>
                                                <div className="du-item-after">
                                                    <span>说明</span> 
                                                    <span className="du-iconfont du-icon-arrow-right"></span>
                                                </div>
                                            </li>                    
                                            <li className="du-item du-item-start">
                                                <div className="du-item-before">
                                                    <div>标题</div>
                                                    <div>文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                                </div>
                                                <div className="du-item-after">
                                                    <span>说明</span> 
                                                    <span className="du-iconfont du-icon-arrow-right"></span>
                                                </div>
                                            </li>                    
                                            <li className="du-item du-item-start">
                                                <div className="du-item-before">
                                                    <div>标题</div>
                                                    <div>文字说明,文字说明,文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                                </div>
                                                <div className="du-item-after">
                                                    <span>说明</span> 
                                                    <span className="du-iconfont du-icon-arrow-right"></span>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="du-panel">
                                    <div className="du-panel-hd">
                                        F
                                    </div>
                                    <div className="du-panel-bd">
                                        <ul className="du-list">

                                            <li className="du-item du-item-column">
                                                <div className="case1">标题</div>
                                                <div className="case2">文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                            </li>
                                            <li className="du-item du-item-column">
                                                <div className="case1">标题</div>
                                                <div className="case2">文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                            </li>
                                            <li className="du-item du-item-column">
                                                <div className="case1">标题</div>
                                                <div className="case2">文字说明,文字说明,文字说明,文字说明,文字说明</div>
                                            </li>
                                            <li className="du-item du-item-column">
                                                <div className="case1">标题</div>
                                                <div className="case2">产品描述,产品描述,产品描述,产品描述,产品描述</div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Wrap>
            </div>
        );
    }
});

module.exports = ListPage;