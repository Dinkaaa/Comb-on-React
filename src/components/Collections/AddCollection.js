import React, { Component } from 'react';

export default class AddCollection extends Component {
    addCollection(){
        if(this.collectionNameInput.value != ''){
            this.props.onAddCollection(this.collectionNameInput.value);
            this.collectionNameInput.value = ''; 
        }
        
    }
    render() {
        
        return (
            <div className="comb-options-block comb-add-collection">
                <h3 className="comb-options-name" >Add Collection</h3>
                <input className="comb-options-input" type="text"
                placeholder="Collection Name"
                ref={(input) => {this.collectionNameInput = input}}/>
                <button className="comb-btn comb-options-btn"
                onClick={this.addCollection.bind(this)}>Add Collection</button>
            </div>
        )
    }
};