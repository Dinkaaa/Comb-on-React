import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import CollList from './Add_RemoveCollection';
import filterCollections from './filterCollections';

export default combineReducers({
    routing: routerReducer,
    CollList,
    filterCollections
});