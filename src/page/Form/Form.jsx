/**
 * Created by delta
 */

import React from 'react';
import ReactDOM from 'react-dom';
import DuWrap from '../../components/DuWrap';
// 非UI框架引用
import style from './Form.useable.duss';
import SystemHeader from '../../components/system/SystemHeader/SystemHeader';
import SystemWrap from '../../components/system/SystemWrap/SystemWrap';

class FormPage extends React.Component {

    static defaultProps = {
        placeholder: '0.模拟PH'
    }

    constructor(props) {

        super(props);

        this.state = {
            inputText: '',
        };

        this.handleChangeText = this.handleChangeText.bind(this);

        this.handleClickPlaceholder = this.handleClickPlaceholder.bind(this);

        this.handleTouchStartDelValue = this.handleTouchStartDelValue.bind(this);
    }

    handleClickPlaceholder() {
        ReactDOM.findDOMNode(this.refs.testInput).focus();
    }    

    handleChangeText(e) {
        let text = e.target.value;
        this.setState({
            inputText: text
        });
    }

    handleTouchStartDelValue(e) {
        this.setState({
            inputText: ''
        });  
        e.preventDefault();
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
            <div className="du-page-form">
                <SystemHeader />
                <DuWrap>
                    <SystemWrap pageName="Form">

                        <div className="du-panel">
                            <div className="du-panel-bd">

                                <div className="du-form">
                                    <div className="du-form-own-item">
                                        <div className="du-form-hd">可交互实例</div>
                                        <div className="du-form-bd">
                                            <span className="du-iconimg du-iconimg-rmb">
                                                <span className="du-form-placeholder" style={{display: this.state.inputText ? 'none': null}} onClick={this.handleClickPlaceholder}>{this.props.placeholder}</span>
                                            </span>
                                            <div className="du-form-del-value" style={{display: this.state.inputText ? null: 'none'}} onTouchStart={this.handleTouchStartDelValue}>
                                                <span className="du-iconimg du-iconimg-close"></span>
                                            </div>
                                            <input 
                                                ref='testInput'
                                                type='text'
                                                className='du-form-input'
                                                onChange={this.handleChangeText}
                                                value={this.state.inputText}
                                            />
                                        </div>
                                    </div>
                                    <div className="du-form-tip du-form-tip-error"><span className="du-iconimg du-iconimg-warn"></span>错误提示</div>
                                    <div className="du-form-sub">其他文案</div>
                                </div> 

                            </div>
                        </div>

                        <div className="du-panel">
                            <div className="du-panel-bd">

                                <div className="du-form">
                                    <div className="du-form-item">
                                        <div className="du-form-hd">标题</div>
                                        <a href="javascript:void(0)">
                                            <div className="du-form-bd"><span className="du-form-placeholder">Link标签</span></div>
                                            <div className="du-form-ft"><span className="du-iconfont du-icon-arrow-right-thick"></span></div>
                                        </a>
                                    </div>
                                    <div className="du-form-tip du-form-tip-error"><span className="du-iconimg du-iconimg-warn"></span>错误提示</div>
                                </div>

                                <div className="du-form">
                                    <div className="du-form-item">
                                        <div className="du-form-hd">标题</div>
                                        <div className="du-form-bd"><input className="du-form-input" type="text" placeholder="说明文字" /></div>
                                    </div>
                                    <div className="du-form-tip du-form-tip-error"><span className="du-iconimg du-iconimg-warn"></span>错误提示</div>
                                </div> 

                                <div className="du-form">
                                    <div className="du-form-item">
                                        <div className="du-form-hd">标题</div>
                                        <div className="du-form-bd"><input className="du-form-input" type="text" placeholder="说明文字" /></div>
                                    </div>
                                    <div className="du-form-tip"></div>
                                </div>       

                            </div>
                        </div>

                        <div className="du-panel">
                            <div className="du-panel-bd">

                                <div className="du-form">
                                    <div className="du-form-item">
                                        <div className="du-form-hd">标题</div>
                                        <div className="du-form-bd"><input className="du-form-input" type="text" placeholder="说明文字" /></div>
                                    </div>
                                </div> 

                            </div>
                        </div>

                        <div className="du-panel">
                            <div className="du-panel-bd">

                                <div className="du-form">
                                    <div className="du-form-own-item">
                                        <div className="du-form-hd">标题</div>
                                        <div className="du-form-bd">
                                            <span className="du-form-icon du-iconimg du-iconimg-rmb"><span className="du-form-placeholder">{this.props.placeholder}</span></span>
                                            <div className="du-form-del-button" style={{display:'none'}}>
                                                <span className="du-iconimg du-iconimg-del"></span>
                                            </div>
                                            <input className="du-form-input" type="text" />
                                        </div>
                                    </div>
                                    <div className="du-form-tip du-form-tip-default">默认文案</div>
                                </div> 

                            </div>
                        </div>

                    </SystemWrap>
                </DuWrap>
            </div>
        );
    }

}

module.exports = FormPage;