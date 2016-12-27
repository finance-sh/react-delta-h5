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
        let className = 'du-action-sheet' + (this.props.isShow ? ' du-action-sheet-show' : '');
        return (
            <div className={className}>
                <div className="du-action-sheet-bd">
                    <div className="du-action-sheet-bd-inner">
                        main part
                    </div>
                    <div className="du-action-sheet-act" onClick={this.props.toggle}>close</div>
                </div>
                <div className="du-action-sheet-shade" onClick={this.handleClick.bind(this)}></div>
            </div>
        );
    }
};