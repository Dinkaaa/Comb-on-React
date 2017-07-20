import React, { Component } from 'react';

export default class ProductsPage extends Component {
    render() {
        console.log('TEST', this.props.CollList);
        return (
            <div className="comb-app">
                <OptionsCollection 
                onAddCollection={this.props.onAddCollection} 
                onFindCollection={this.props.onFindCollection} 
                />
                <div  className="comb-content comb-content-product-page">
                    PR
                </div>
                
            </div>
                
            )
    }
};