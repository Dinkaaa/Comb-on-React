import React, { Component } from 'react';

export default class Product extends Component {
    render() {
        return (
            <div className="comb-coll-product-block">
                    <div className="comb-coll-product-block-img">
                        <div className="help-collection-block">
                            <img src={this.props.product.ImageURL} alt="" />
                        </div>
                    </div>

                    <div className="comb-product-info">
                        <span className="comb-product-brand">{this.props.product.BrandName}</span>
                        <span className="comb-product-price">{this.props.product.PriceLabel}</span>
                    </div>
                    <div className="comb-hover-collection comb-hide">
                        <div className="comb-collection-block-active">
                                <a className="comb-view-similar-link" data-itemid="4131574" data-imageurl="https://comb.api.combapp.shop/Assets/Original/Products/S/bfea157e-b312-7b73-7fe3-162100330688.jpg" data-pricelabel="£309.00" data-brandname="SET" data-pageurl="https://api.shopstyle.com/action/apiVisitRetailer?id=629006297&amp;pid=uid5801-24827901-83&amp;site=www.shopstyle.co.uk" data-userid="" data-username="" data-imgurl="https://comb.api.combapp.shop/Assets/Original/">
                                    <img src="" alt="" />
                                    <span className="comb-btn comb-btn-view-collection">view</span>
                                </a>
                        </div>
                    </div>
                </div>
            
        )
    }
};
