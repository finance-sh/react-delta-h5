import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import Routes from './Routes';

import'./components/Delta/delta.less';
import'./components/System/Icon/lib/Icon.less';

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
        childRoutes: Routes.routers
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