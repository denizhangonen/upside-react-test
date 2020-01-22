import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Aux from "../../hoc/Aux/Aux";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";

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
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };

  addIngredientHandler = ingredient => {
    this.props.onAddIngredient(ingredient);
  };

  removeIngredientHandler = ingredient => {
    this.props.onRemoveIngredient(ingredient);
  };

  render() {
    const { curIngredients, totalPrice } = this.props;
    let addedIngs = [];

    // Construct an array of added ingredients
    for (const key in curIngredients) {
      if (curIngredients[key]) {
        addedIngs.push(key);
      }
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={addedIngs}
            price={totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
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
    totalPrice: state.pizzaBuilder.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onAddIngredient: actions.addIngredient,
      onRemoveIngredient: actions.removeIngredient
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);
