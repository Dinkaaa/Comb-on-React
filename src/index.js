import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';

import { AppContainer } from 'react-hot-loader';
import 'regenerator-runtime/runtime';

import './components/styles.scss';




import * as DataService from './components/DataService';
import App from './components/App';
import ProductsPage from './components/Products/ProductsPage.js';

import  reducer  from './components/reducers'

//STORE
const middleware = routerMiddleware(browserHistory);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);
history.listen(location => analyticsService.track(location.pathname));


//data from API

export const token = "74fa110b-35cd-41a9-addc-bfc0ff9f5a1e";
export const url = "http://comb.api.combapp.shop/api/";
export const version = "v4"
//<Route path="/collections/:id" component={ProductsPage} />
// <Router history={hashHistory}>
//             <Route path="/" component={App} />
//         </Router>

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
             <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.querySelector('#root')
);

// render(App);

// if (module.hot) {
//     module.hot.accept('./components/App', () => {
//         render(<h1>Hello</h1>);
//     })
// }