import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    // const proDetail = this.props.proDetail; es5
    const { proDetail } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={proDetail.image} alt="asdas" />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{proDetail.name}</td>
              </tr>
              <tr>
                <td>Alias</td>
                <td>{proDetail.alias}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{proDetail.price}$</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{proDetail.description}</td>
              </tr>
              <tr>
                <td>Short description</td>
                <td>{proDetail.shortDescription}</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>{proDetail.quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
