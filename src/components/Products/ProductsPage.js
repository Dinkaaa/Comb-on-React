import React, { Component } from 'react';
import Product  from './Product'
import { Link } from 'react-router';

import {connect} from 'react-redux';

 const ProductsPage = ({ CollList }) => {
     
        // let test = mapStateToProps();
       let Products = CollList.Products;
        console.log('TEST', Products);
        return (
            <div className="comb-app">
                <div  className="comb-content comb-content-product-page">
                    <div className="comb-coll-header">
                        <div>
                            <span className="comb-coll-page-text"><Link to='/'>Collections</Link></span>
                            <span> ></span>
                            <span className="comb-collection-page-name">{CollList.Name}</span>
                            <span className="comb-collection-header-item">{Products.length} items </span></div>
                    </div>
                    <div className="comb-all-products">
                         {Products.map((item, index) => 
                            <Product key={index} 
                             product={item}/>
                         )}
                    </div>
                </div>
                
            </div>
                
            )
};

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return{
        CollList: state.CollList.find(element => element.CollectionID === Number(ownProps.params.number))
    }
}
export default connect(mapStateToProps)(ProductsPage) 

// {this.props.collection.map((item, index) => 
//                             <Product key={index} 
//                             product={item}/>
//                         )}