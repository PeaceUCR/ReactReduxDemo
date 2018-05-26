import React from 'react';
import ReactDOM from 'react-dom';
import StatusPage from './containers/StatusPage';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware , compose} from 'redux'
import appReducer from './reducers/index'
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import {ConnectedRouter, routerMiddleware, push} from 'react-router-redux'


//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const rmiddleware = routerMiddleware(history);

// for chrome debug extension
//https://stackoverflow.com/questions/37526621/no-store-found-when-using-redux-chrome-extension

const store = createStore(appReducer, applyMiddleware(thunk, rmiddleware));
//store.subscribe(() => console.log('store', store.getState()));

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact={true} path="/" component={StatusPage} />
                <Route exact={true} path="/abc" component={StatusPage} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
