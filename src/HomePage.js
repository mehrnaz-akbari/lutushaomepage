import React, { useState } from "react";
import Menu from "./components/Menu";
import BestSeller from "./components/BestSeller";
import ProductList from "./components/ProductList";
import { bestSellerList, productList } from "./FakeData";

class HomePage extends React.Component {
  state = {
    orderList: [],
  };
  addToList = (type, id) => {
    let theItem = {};
    let theList = this.state.orderList;
    if (!this.state.orderList.find((data) => data.id === id)) {
      if (type === "productList") {
        theItem = productList.find((data) => data.id === id);
      } else {
        theItem = bestSellerList.find((data) => data.id === id);
      }
      let item = {
        id: theItem.id,
        title: theItem.title,
        price: theItem.price,
        img: theItem.img,
      };
      theList.push(item);

      this.setState({
        orderList: theList,
      });
    }
  };
  handleDelete = (id) => {
    let theList = this.state.orderList.filter((data) => data.id !== id);
    this.setState({
      orderList: theList,
    });
  };
  render() {
    console.log(this.state.orderList);

    return (
      <div className="homePage">
        <div className="mainBg" />
        <Menu
          shopList={this.state.orderList}
          deleteFromList={this.handleDelete}
        />
        <div className="container">
          <BestSeller list={bestSellerList} handleMangeItem={this.addToList} />
          <ProductList list={productList} handleMangeItem={this.addToList} />
        </div>
      </div>
    );
  }
}
export default HomePage;
