import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Collection extends Component {
    removeCollection(){
        let id = this.props.collection.CollectionID;
        this.props.onRemoveCollection(id);
    }
    render() {
        return (
            <div className="comb-collection-block">
                <div className="comb-collection-block-header">
                    <span className="comb-collection-name">{this.props.collection.Name}</span>
                    <span className="comb-collection-header-item"> {this.props.collection.Products.length + (this.props.collection.Products.length > 1 ? ' items': ' item')}</span>
                    </div>
                <div className="comb-collection-images">
                  <div className="help-collection-block">
                  {this.props.collection.Products.map((item, index) => { 
                      if(index < 4)
                        return <div className="item" key={item.ItemID}> <img  src={item.ImageURL} alt={item.Name}/> </div>
                      
                  })  
                }                     
                   </div>
				</div>
                <div className="comb-hover-collection"> 
                    <div className="comb-collection-block-active ">
                        <img src="../img/comb-eye-slider.svg" alt=""/>
                        
                        <Link className="comb-btn comb-btn-view-collection=" to={`/${this.props.collection.CollectionID}`} >view collection</Link>
                        <button 
                        className="comb-btn comb-remove-collection"
                        onClick={this.removeCollection.bind(this)}
                        >Remove</button>
                    </div>
                </div>
            </div>
        )
    }
};