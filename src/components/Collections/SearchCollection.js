import React, { Component } from 'react';

export default class SearchCollection extends Component {
    filterCollcetions(event){
        this.props.onFindCollection(event.target.value.toLowerCase());
    }
    render() {
        
        return (
            <div className="comb-options-block comb-search-collection">
                <h3 className="comb-options-name" >Search Collection</h3>
                <input className="comb-options-input" type="text"
                placeholder="Collection Name"
                onChange={this.filterCollcetions.bind(this)}/>
            </div>
        )
    }
};