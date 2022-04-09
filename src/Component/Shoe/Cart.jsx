import React, { Component } from "react";

export default class Cart extends Component {
  renderCartList = (cardList) => {
    console.log(cardList);
    return cardList.map((item, index) => {
      return (
        <tr className="card-item">
          <td>{item.alias}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.image} width={50} alt />
          </td>
          <td>
            <button
              onClick={() => this.props.handleQuantity(false, item.alias)}
            >
              -
            </button>
            {item.soLuong}
            <button onClick={() => this.props.handleQuantity(true, item.alias)}>
              +
            </button>
          </td>
          <td>{item.price}</td>
          <td>{item.price * item.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.handleRemove(item.alias)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    const { cardList } = this.props;

    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        aria-labelledby="modelTitleId"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartList(cardList)}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
