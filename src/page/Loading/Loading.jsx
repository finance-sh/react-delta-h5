/**
 * @file   Loading模块
 * @author zhong
 */

import React from 'react';
import style from './Loading.useable.less';
import SystemHeader from '../../components/system/Header/Header';

import Loading from '../../components/WrcLoading/lib/WrcLoading';

const LoadingPage = React.createClass({

    componentWillMount: function () {
        style.use();
    },
    componentDidMount: function() {
    },
    componentWillUnmount: function () {
        style.unuse();
    },
    case1: function () {
        var loadingLayer = Loading();
        setTimeout(function() {
            loadingLayer.closeLayer();
        }, 3000);
    },
    render: function () {
        var that = this;
        return (
            <div className="du-page-loading">

                <SystemHeader />

                <div className="du-page-bd">
                    <div className="du-page-bd-inner">
                        <section className="loading-section">
                            <div className="delta-bx">
                                <h2 className="delta-hd">Loading</h2>
                                <div className="delta-bd">
                                    <div className="case-1">
                                        <a href="javascript:void(0)" onClick={that.case1} className="du-button du-button-danger">带文字</a>
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

module.exports = LoadingPage;