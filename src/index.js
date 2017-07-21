import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory  } from 'react-router';

import { syncHistoryWithStore } from 'react-router-redux';

import { AppContainer } from 'react-hot-loader';
import 'regenerator-runtime/runtime';

import './components/styles.scss';




import * as DataService from './components/DataService';
import App from './components/App';
import ProductsPage from './components/Products/ProductsPage';


import  reducer  from './components/reducers';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory , store);


//data from API

export const token = "74fa110b-35cd-41a9-addc-bfc0ff9f5a1e";
export const url = "http://comb.api.combapp.shop/api/";
export const version = "v4"

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} >
            <Route path="/" component={App}/>
            <Route path="/:number" component={ProductsPage}>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#root')
);
