# This is the demo app built by Adam(Ping He) at CDK Global
and use this for Redux sample

# Redux Get Start

1. Build the App State
2. Change the state by dispatch an action. Reducer: function that takes state and action as arguments, and returns the next state of the app. Different part of state can have different sub reducer. https://redux.js.org/docs/introduction/CoreConcepts.html

3. the state of your whole application is stored in an object tree within a single store.

(for some special case, like the input filed,we can just keep its state in the component level, not in the app store)

Create store with combined reducer

Concepts are here https://redux.js.org/glossary#async-action

Action: obj with type and payload/data, the reducer will accept the previous state and action to generate new state.

ActionCreator(https://github.com/cdklab59/ownership-workshop-tracker-ui/blob/new-ui/src/actions/index.js):  function  of return obj with type and payload/data. With the middleware ‘redux-thunk’, we can return a function with the input ‘dispatch’, then use the dispatch method when the action available, usually when a promise is resolved, and it can also support multiple promise chain.


Reducer: function accept the previous state and action to generate new state. Normally we need to divide the whole App State into some smaller part.
in(https://github.com/cdklab59/ownership-workshop-tracker-ui/blob/new-ui/src/reducers/index.js), we use ‘combineReducers’ to combine multiple smaller part into one.
The Store can be created from Reducer( https://github.com/cdklab59/ownership-workshop-tracker-ui/blob/new-ui/src/index.js)


MiddleWare: A middleware is a higher-order function that composes a dispatch function to return a new dispatch function. It often turns async actions into actions. (https://github.com/cdklab59/ownership-workshop-tracker-ui/blob/new-ui/src/index.js)

Redux thunk for multiple promise chain:
Normally in the action/index.js function will return action obj with type&payload
but with thunk middleware, we just return a function with argument dispatch,
then dispatch the action when it available.


Component: How to use action creator and app state in component?
//use this to call action creater in class by props
	function mapDispatchToProps(dispatch) {
	    return bindActionCreators({fetchAll: fetchAll, setCurrentPage: setCurrentPage}, dispatch);
	}


//use this to get app state in class by props
	function mapStateToProps(state) {
	    return {job: state.job, error: state.error, nav: state.nav}; //just maintain only one level of state/ otherwise you can't get the child obj props
	}
https://github.com/cdklab59/ownership-workshop-tracker-ui/blob/new-ui/src/containers/StatusPage.js




ReactJS https://reactjs.org/docs/components-and-props.html
Props: read only, All React components must act like pure functions with respect to their props.(component
 can’t change it props)

State and Lifecycle

Use class method .bind(this)

Ref https://reactjs.org/docs/refs-and-the-dom.html

Type checking with propTypes https://github.com/cdklab59/ownership-workshop-tracker-ui/blob/develop/src/components/StatusBar.js


# For this APP
folder /actions /reducers /components

/containers: use for the combine one page in Single page application


# Redux Router
add router in store
how to
1. package.json
 add     
"react-router": "^4.2.0",
"react-router-dom": "^4.2.2",
"react-router-redux": "^5.0.0-alpha.6"


2. /src/index.js

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

then use in render
       <ConnectedRouter history={history}>
            <div>
                <Route exact={true} path="/abc" component={StatusPage} />
            </div>
        </ConnectedRouter>
        
        
3. in /src/reducers/index.js  
import { routerReducer } from 'react-router-redux'
add router: routerReducer in combineReducers
