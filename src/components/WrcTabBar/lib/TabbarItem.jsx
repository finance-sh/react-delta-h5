import React from 'react';
import classNames from 'classnames';
import TabBarIcon from './TabBarIcon';
import TabBarLabel from './TabBarLabel';

/**
 *  Tabbar item
 *
 */
export default class TabBarItem extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        icon: React.PropTypes.any,
        label: React.PropTypes.string
    };

    static defaultProps = {
      active: false,
      icon: false,
      label: ''
    };

    render() {

        const {children, className, active, icon, label, ...others} = this.props;
        const cls = classNames({
            'du-tabbar-item': true,
            'du-tabbar-item-select': active
        }, className);

        if(icon || label){
            return (
                <div className={cls} {...others}>
                    {icon ? <TabBarIcon>{icon}</TabBarIcon> : false}
                    {label ? <TabBarLabel>{label}</TabBarLabel> : false}
                </div>
            )
        }else{
            return (
                <div className={cls} {...others}>
                    {children}
                </div>
            );
        }
    }
}