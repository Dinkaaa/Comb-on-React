import React, { Component } from 'react';

import CollectionsList from './CollectionsList';
import OptionsCollection from './OptionsCollection';

export default class MainCollections extends Component {
    render() {
        return (
            <div className="comb-app">
                <OptionsCollection 
                onAddCollection={this.props.onAddCollection} 
                onFindCollection={this.props.onFindCollection} 
                />
                <div  className="comb-content comb-content-collection-page">
                    <CollectionsList 
                    collection={this.props.collection}
                    onRemoveCollection={this.props.onRemoveCollection}
                    />
                </div>
                
            </div>
        )
                
    }
};