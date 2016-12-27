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
        let className = 'action-sheet' + (this.props.isShow ? ' sheet-show' : '');
        return (
            <div className={className}>
                <div className="sheet-part">
                    <div className="sheet-close" onClick={this.props.toggle}>close</div>
                    <div className="sheet-content">
                        main part
                    </div>
                </div>
                <div className="sheet-modal" onClick={this.handleClick.bind(this)}></div>
            </div>
        );
    }
};