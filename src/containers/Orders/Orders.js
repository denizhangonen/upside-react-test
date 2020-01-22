import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../../store/actions/";

import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    console.log(this.props.purchased);
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => {
        
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.totalPrice}
          />
        );
      });
    }
    return <div>{orders}</div>;
  }
}
const mapStateToProps = state => {
  return {
    purchased: state.order.purchased,
    orders: state.order.orders
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onAddIngredient: actions.addIngredient,
      onRemoveIngredient: actions.removeIngredient,
      onInitPurchase: actions.purchasePizza,
      onFetchOrders: actions.fetchOrders
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
