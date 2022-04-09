import React, { Component } from "react";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default class ShoesShop extends Component {
  state = {
    cardList: [],
    proDetail: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  handleSetProDetail = (product) => {
    this.setState({ proDetail: product });
  };
  handleAddCart = (product) => {
    let newCartList = this.state.cardList;
    let index = newCartList.findIndex((item) => item.maSP === product.maSP);
    if (index !== -1) {
      newCartList[index].soLuong += 1;
    } else {
      newCartList.push({ ...product, soLuong: 1 });
    }
    this.setState({ cardList: newCartList });
  };
  handleQuantity = (status, maSP) => {
    let cartList = this.state.cardList;
    const index = cartList.findIndex((cart) => cart.alias === maSP);
    if (index !== -1) {
      if (status) {
        cartList[index].soLuong += 1;
      } else {
        if (cartList[index].soLuong > 1) {
          cartList[index].soLuong -= 1;
        } else {
          cartList.splice(index, 1);
        }
      }
    }
    this.setState({ cardList: cartList });
  };
  handleRemove = (alias) => {
    let cartList = this.state.cardList;
    const index = cartList.findIndex((cart) => cart.alias === alias);
    if (index !== -1) {
      cartList.splice(index, 1);
    }
    this.setState({ cardList: cartList });
  };

  totalCartList = () => {
    return this.state.cardList.reduce(
      (total, item) => (total += item.soLuong),
      0
    );
  };
  render() {
    return (
      <section className="container">
        <h3 className="title text-center">Shoes shop</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalCartList()})
          </button>
        </div>
        <ProductList
          handleSetProDetail={this.handleSetProDetail}
          handleAddCart={this.handleAddCart}
        />
        <Cart
          cardList={this.state.cardList}
          handleQuantity={this.handleQuantity}
          handleRemove={this.handleRemove}
        />
        <ProductDetail proDetail={this.state.proDetail} />
      </section>
    );
  }
}
