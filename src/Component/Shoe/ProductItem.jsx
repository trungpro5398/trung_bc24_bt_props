import React, { Component } from "react";

export default class ProductItem extends Component {
  handleClick = () => {
    this.props.handleSetProDetail(this.props.product);
  };
  handleAdd = () => {
    this.props.handleAddCart(this.props.product);
  };
  render() {
    const product = this.props.product;
    return (
      <div className="card">
        <img className="card-img-top" src={product.image} alt />
        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <h4 className="price-title">{product.price}$</h4>
          <button className="btn btn-success" onClick={this.handleClick}>
            Detail
          </button>
          <button className="btn btn-danger" onClick={this.handleAdd}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
