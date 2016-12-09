/**
 * @file   TabBar模块
 * @author zhong
 */

import React from 'react';
import style from './TabBar.useable.less';
import SystemHeader from '../../components/system/Header/Header';

import {
   TabBar,
   TabBarItem,
   TabBarIcon,
   TabBarLabel
} from '../../components/WrcTabBar/lib/WrcIndex';

import testIcon from './img/icon.png';

const TabBarPage = React.createClass({

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
            <div className="du-page-tabbar">

                <SystemHeader />

                <div className="du-page-bd">
                    <div className="du-page-bd-inner">
                        <div className="tabbar-section">
                            <div style={{height:'30rem',textAlign:'center'}}>内容</div>
                        </div>
                    </div>
                </div>

                <TabBar>
                    <TabBarItem 
                    label="Tab1" 
                    onClick={e=>alert(1)} 
                    icon={<img src={testIcon}/>}
                    />

                    <TabBarItem 
                        active={true}
                        label="Tab2" 
                        onClick={e=>alert(2)} 
                        icon={<img src={testIcon}/>}
                    />
                    <TabBarItem 
                        label="Tab3" 
                        onClick={e=>alert(3)} 
                        icon={<img src={testIcon}/>}
                    />
                </TabBar>

            </div>
        );
    }
});

module.exports = TabBarPage;