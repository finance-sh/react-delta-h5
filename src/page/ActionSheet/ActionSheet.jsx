/**
 * @file   ActionSheet 模块
 * @author liwencheng
 */

import React from 'react';
import DuWrap from '../../components/WrcDuWrap';
import ActionSheet from '../../components/WrcActionSheet';
// 非UI框架引用
import style from './ActionSheet.useable.less';
import SystemHeader from '../../components/system/SystemHeader/SystemHeader';
import SystemWrap from '../../components/system/SystemWrap/SystemWrap';

class ActionSheetPage extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 用来维护a.s.的状态, isShow: 是否显示; isBlurToClose: 是否可以blur关闭
         * @type {{isShow: boolean, isBlurToClose: boolean}}
         */
        this.state = {
            isShow: false,
            isBlurToClose: true
        };
        this._toggle = this.toggleSheet.bind(this);
    }

    /**
     * 打开a.s.后无法通过点击其他区域来关闭
     */
    openSheetWithoutBlur() {
        this.setState({
            isBlurToClose: false,
            isShow: true
        });
    }
    /**
     * 打开a.s.后可以通过点击其他区域来关闭
     */
    openSheetWithBlur() {
        this.setState({
            isBlurToClose: true,
            isShow: true
        });
    }
    /**
     * 转换a.s.的显隐
     */
    toggleSheet() {
        let now = this.state.isShow;
        this.setState({
            isShow: !now
        });
    }
    componentWillMount() {
        style.use();
    }
    componentDidMount() {
    }
    componentWillUnmount() {
        style.unuse();
    }
    render() {
        return (
            <div className="du-page-actionsheet">
                <SystemHeader />
                <DuWrap>
                    <SystemWrap pageName="ActionSheet">
                        <div className="case-1">
                            <a href="javascript:void(0)" onClick={this.openSheetWithBlur.bind(this)} className="du-button du-button-danger">点击空白处关闭的 action sheet</a>
                            <a href="javascript:void(0)" onClick={this.openSheetWithoutBlur.bind(this)} className="du-button du-button-danger">点击取消按钮关闭的 action sheet</a>
                        </div>
                    </SystemWrap>
                </DuWrap>
                <ActionSheet {...this.state} toggle={this._toggle}>
                    <ul className="du-actionsheet-list du-list">
                        <li className="du-item du-item-link"><a href="#">实例菜单</a></li>
                        <li className="du-item du-item-link"><a href="#">实例菜单</a></li>
                    </ul>
                    <div className="du-actionsheet-cancel du-item" onClick={this._toggle}>取消</div>
                </ActionSheet>
            </div>
        );
    }
}

module.exports = ActionSheetPage;