import React, { Component } from 'react';
import AddCollection from './AddCollection';
import SearchCollection from './SearchCollection';

export default class OptionsCollection extends Component {
    render() {
        
        return (
            <div className="comb-options">
                <AddCollection  onAddCollection={this.props.onAddCollection}/>
                <SearchCollection onFindCollection={this.props.onFindCollection}/>
            </div>
        )
    }
};