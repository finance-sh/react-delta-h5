/**
 * @file   Loading模块
 * @author zhong
 */

import React from 'react';
import Wrap from '../../components/WrcWrap';
import Loading from '../../components/WrcLoading';

import style from './Loading.useable.less';
import SystemHeader from '../../components/system/Header/Header';

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
        }, 5000);
    },
    render: function () {
        var that = this;
        return (
            <div className="du-page-loading">
                <SystemHeader />
                <Wrap>
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
                </Wrap>
            </div>
        );
    }
});

module.exports = LoadingPage;