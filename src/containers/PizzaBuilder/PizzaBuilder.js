import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Aux from "../../hoc/Aux/Aux";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";
import OrderSuccess from "../../components/Pizza/OrderSuccess/OrderSuccess";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as actions from "../../store/actions/";

class PizzaBuilder extends Component {
  state = {
    purchasing: false
  };

  purchaseHandler = () => {
    console.log("Let s order this delicious pizza!");
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const data = {
      ingredients: this.props.curIngredients,
      totalPrice: this.props.totalPrice
    };
    this.props.onInitPurchase(data);
  };

  addIngredientHandler = ingredient => {
    this.props.onAddIngredient(ingredient);
  };

  removeIngredientHandler = ingredient => {
    this.props.onRemoveIngredient(ingredient);
  };

  gotoMainPageHandler = () => {
  // Not an elegant solution
    window.location.reload();
  };

  gotoOrdersHandler = () => {    
    this.props.history.push("/orders");
  };

  render() {
    const { curIngredients, totalPrice, loading } = this.props;
    let addedIngs = [];

    // Construct an array of added ingredients
    for (const key in curIngredients) {
      if (curIngredients[key]) {
        addedIngs.push(key);
      }
    }
    let modalContent = null;

    // For purchasing state, draw related modal content
    if (this.state.purchasing) {
      if (loading) {
        modalContent = <Spinner />;
      } else {
        modalContent = this.props.purchased ? (
          <OrderSuccess
            ingredients={addedIngs}
            price={totalPrice}
            goToMainPage={this.gotoMainPageHandler}
            goToOrdersPage={this.gotoOrdersHandler}
          />
        ) : (
          <OrderSummary
            ingredients={addedIngs}
            price={totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        );
      }
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {modalContent}
        </Modal>
        <Pizza ingredients={addedIngs} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={totalPrice}
          purchasable={addedIngs.length > 0}
          curIngredients={curIngredients}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    curIngredients: state.pizzaBuilder.currentIngredients,
    totalPrice: state.pizzaBuilder.totalPrice,
    purchased: state.order.purchased,
    loading: state.order.loading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onAddIngredient: actions.addIngredient,
      onRemoveIngredient: actions.removeIngredient,
      onInitPurchase: actions.purchasePizza
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);
