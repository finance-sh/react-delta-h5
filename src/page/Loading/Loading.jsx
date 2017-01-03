/**
 * Created by delta
 */

import React from 'react';
import DuWrap from '../../components/DuWrap';
import Loading from '../../components/Loading';
// 非UI框架引用
import style from './Loading.useable.duss';
import SystemHeader from '../../components/system/SystemHeader/SystemHeader';
import SystemWrap from '../../components/system/SystemWrap/SystemWrap';

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
                <DuWrap>
                    <SystemWrap pageName="Loading">
                        <div className="case-1">
                            <a href="javascript:void(0)" onClick={that.case1} className="du-button du-button-danger">带文字</a>
                        </div>
                    </SystemWrap>
                </DuWrap>
            </div>
        );
    }
});

module.exports = LoadingPage;