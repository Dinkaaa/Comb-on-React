import React, { Component } from 'react';


import {connect } from 'react-redux';
import { createStore } from 'redux';

import CollectionsList from './Collections/CollectionsList';
import OptionsCollection from './Collections/OptionsCollection';

import * as DataService from './DataService';
import {token, url, version} from '.././index.js';

import {getCollections} from './actions/collections';

class App extends Component {
    componentDidMount(){
        this.props.onGetCOllections();
    }
    render() {
        console.log('TEST', this.props.CollList);
        return (
            <div className="comb-app">
                <OptionsCollection 
                onAddCollection={this.props.onAddCollection} 
                onFindCollection={this.props.onFindCollection} 
                />
                <div  className="comb-content comb-content-collection-page">
                    <CollectionsList 
                    collection={this.props.CollList}
                    onRemoveCollection={this.props.onRemoveCollection}
                    />
                </div>
                
            </div>
                
            )
    }
};
export default connect(
    (state, ownProps) => ({
       CollList:state.CollList.filter(element => element.Name.includes(state.filterCollections)),
       ownProps
    }),
    // state => ({
    //    CollList:state.CollList.filter(element => element.Name.toLowerCase().includes(state.filterCollections))
    // }),
    dispatch => ({
        onAddCollection:(collectionName) => {
            
            let SendNewCollection = new DataService.DataRequest(
                {"Name" : collectionName},
                 "POST", 
                 url + version + "/UserCollectionsV4", 
                { Authorization: token, "Content-Type" : "application/json" });
                SendNewCollection.Execute((response)=>{
                let data = response.Data;
                dispatch({ type: 'ADD_COLLECTION' , payload: data})
            });
           // dispatch({ type: 'ADD_COLLECTION' , payload: collectionName})
        },
        onRemoveCollection:(id) => {
            let SendNewCollection = new DataService.DataRequest(
                {"Data" : {}},
                 "DELETE", 
                 url + version + "/CollectionsV4/" + id, 
                { Authorization: token, "Content-Type" : "application/json" });
                SendNewCollection.Execute((response)=>{
                let data = response.Data;
                dispatch({ type: 'REMOVE_COLLECTION' , payload: id})
            });
        },
        onFindCollection:(name) =>{
            dispatch({ type: 'FIND_COLLECTION', payload: name});

        },
        onGetCOllections:() =>{
            dispatch(getCollections());
        }
    })
)(App);