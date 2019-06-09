import React from 'react';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import { store } from './redux/configureStore';

import './style/reset.css';
import './style/style.css';

function StartTemplate() {
    return (
        <div>
            <h1>React App begins here...</h1>
        </div>
    )
}

const App = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={StartTemplate} />
            </Switch>
        </HashRouter>
    </Provider>
);

render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'));