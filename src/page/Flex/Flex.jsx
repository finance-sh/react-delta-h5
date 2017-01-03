/**
 * Created by delta
 */

import React from 'react';
import DuWrap from '../../components/DuWrap';
// 非UI框架引用
import style from './Flex.useable.duss';
import SystemHeader from '../../components/system/SystemHeader/SystemHeader';
import SystemWrap from '../../components/system/SystemWrap/SystemWrap';

const FlexPage = React.createClass({

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
            <div className="du-page-flex">
                <SystemHeader />
                <DuWrap>
                    <SystemWrap pageName="Flex">
                        <div className="case-1">
                            <div className="du-flex">
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                            </div>
                            <div className="du-flex">
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                            </div>
                            <div className="du-flex">
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                            </div>
                            <div className="du-flex">
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                            </div>
                            <div className="du-flex">
                                <div><div className="placeholder">delta</div></div>
                                <div className="du-flex-item"><div className="placeholder">delta</div></div>
                                <div><div className="placeholder">delta</div></div>
                            </div>
                        </div>
                    </SystemWrap>
                </DuWrap>
            </div>
        );
    }
});

module.exports = FlexPage;