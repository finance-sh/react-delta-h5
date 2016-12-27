/**
 * @file   DuWrap
 * @author zhong
 */

import React from 'react';

export default class DuWrap extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <div className="du-page-bd">
                <div className="du-page-bd-inner">
                    {children}
                </div>
            </div>
        );
    }
}