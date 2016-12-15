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
        var TPL = '';
        for(var i=0;i<=20;i++) {
            TPL += "<div style=text-align:center>内容" + i + ",共20个</div>";
        }
        return (
            <div className="du-page-tabbar">

                <SystemHeader />

                <div className="du-page-bd">
                    <div className="du-page-bd-inner">
                        <div className="tabbar-section">
                            <div dangerouslySetInnerHTML={{__html: TPL}}></div>,
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