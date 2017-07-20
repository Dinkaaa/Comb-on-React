import React, { Component } from 'react';
import Collection from './Collection';

export default class CollectionsList extends Component {
    render() {
        
        return (
            <div className="comb-collection-list">
             {this.props.collection.map((item, index) => 
                 <Collection key={index} 
                 collection={item}
                 onRemoveCollection={this.props.onRemoveCollection}/>
                )}
            </div>
        )
    }
};