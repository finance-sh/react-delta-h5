/**
 * @file   SystemWrap
 * @author zhong
 */

import React from 'react';

export default class SystemWrap extends React.Component {
    render() {
        const {children, pageName, subName} = this.props;
        const pageNameLowerClass = pageName.toLowerCase() + '-section';
        return (
            <section className={pageNameLowerClass}>
                <div className="delta-bx">
                    <h2 className="delta-hd">{subName ? subName : pageName}</h2>
                    <div className="delta-bd">
                        {children}
                    </div>
                </div>
            </section>
        );
    }
}

module.exports = SystemWrap;