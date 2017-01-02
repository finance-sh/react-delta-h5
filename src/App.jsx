/**
 * Created by delta
 */
 
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import routers from './Routes';

import Delta from './components/Delta';
import'./components/System/SystemIcon/lib/SystemIcon.duss';

var App = React.createClass({
    render: function() {
        return (
            <div className="du-page-outer">
                {this.props.children}
            </div>
        );
    }
});

var rootRoute = {
    childRoutes: [{
        component: App,
        indexRoute: {},
        childRoutes: routers
    }]
};

window.onload = function() {
    ReactDOM.render((
        <Router
            history={browserHistory}
            routes={rootRoute}
        />
    ), document.querySelector('#du-app'));
};