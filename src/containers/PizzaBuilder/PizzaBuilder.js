import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Aux from "../../hoc/Aux/Aux";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Pizza/OrderSummary/OrderSummary";
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

  render() {
    const { curIngredients, totalPrice, loading } = this.props;
    let addedIngs = [];

    // Construct an array of added ingredients
    for (const key in curIngredients) {
      if (curIngredients[key]) {
        addedIngs.push(key);
      }
    }

    const purchasedRedirect = this.props.purchased ? (
      <Redirect to="/orders" />
    ) : null;

    return (
      <Aux>
        {purchasedRedirect}
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}          
        >
          {loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={addedIngs}
              price={totalPrice}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
            />
          )}
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
