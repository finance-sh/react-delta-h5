/**
 * @file
 * @author liwencheng
 * baidu.inc
 */

import React from 'react';
import './ActionSheet.less';

export default class ActionSheet extends React.Component {
    constructor(props) {
        super(props);
    }
    /**
     * 处理blur时是否关闭a.s.
     */
    handleClick() {
        if(this.props.isBlurToClose) {
            this.props.toggle();
        }
    }

    render() {
        let className = 'du-actionsheet' + (this.props.isShow ? ' du-actionsheet-show' : '');
        return (
            <div className={className}>
                <div className="du-actionsheet-bd">
                    <div className="du-actionsheet-bd-inner">
                        {this.props.children}
                    </div>
                </div>
                <div className="du-actionsheet-shade" onClick={this.handleClick.bind(this)}></div>
            </div>
        );
    }
};